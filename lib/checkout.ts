interface CheckoutErrorResponse {
  error?: string;
}

interface CheckoutSuccessResponse {
  url?: string;
}

// Extend the browser Window interface with Plausible definition
interface PlausibleWindow extends Window {
  plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
}

export async function checkout(priceId: string, ref?: string) {
  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId, ref }),
    });

    /**
     * Helper – safely parse JSON without throwing,
     * returns undefined if JSON is invalid / empty.
     */
    const tryParseJson = async <T>(resp: Response): Promise<T | undefined> => {
      try {
        // Some error responses return empty body which would throw.
        return (await resp.clone().json()) as T;
      } catch {
        return undefined;
      }
    };

    if (!response.ok) {
      const errorData = await tryParseJson<CheckoutErrorResponse>(response);
      const errorText = await response.text(); // for non-JSON error bodies
      const errorMessage =
        errorData?.error ||
        errorText ||
        `Request failed with status ${response.status}`;
      console.error(
        "[checkout] API error:",
        response.status,
        response.statusText,
        errorMessage
      );
      throw new Error(errorMessage);
    }

    // Parse success JSON, but don't fail if body is empty/invalid.
    const data: CheckoutSuccessResponse | undefined =
      await tryParseJson<CheckoutSuccessResponse>(response);

    // If the API returns a redirect URL (e.g., from Stripe Checkout)
    if (data?.url && typeof data.url === "string") {
      const redirectUrl = data.url;
      if (!redirectUrl) {
        console.warn("Checkout succeeded but no redirect URL was provided.");
        return;
      }
      // Trigger Plausible custom event before redirecting
      if (typeof window !== "undefined") {
        const w = window as PlausibleWindow;
        w.plausible?.("StripeCheckout", { props: { priceId } });
      }
      window.location.href = redirectUrl;
    } else {
      // Handle other successful responses if any, though for checkout, a redirect is expected
      console.log("Checkout initiated successfully, but no redirect URL received:", data);
      alert("Checkout initiated successfully! Please check your console for details.");
    }
  } catch (error: unknown) {
    console.error("[checkout] Unhandled error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";
    alert(`Checkout failed: ${errorMessage}`);
  }
}