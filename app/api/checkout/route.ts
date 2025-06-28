import { NextResponse } from 'next/server';
import Stripe from 'stripe';

/**
 * Ensure required env vars exist **at module load time** so that we fail fast
 * rather than inside the request handler.
 */
if (!process.env.STRIPE_SECRET_KEY) {
  // eslint-disable-next-line no-console
  console.error(
    '[checkout] Environment mis-configuration: STRIPE_SECRET_KEY is missing.'
  );
  throw new Error('Server mis-configuration: STRIPE_SECRET_KEY is not defined');
}

/**
 * Instantiate Stripe without forcing a specific `apiVersion`.
 * This avoids TS mismatches when Stripe bumps its minimum-supported
 * version and always uses the latest stable API automatically.
 */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { priceId, ref } = body as { priceId?: string; ref?: string };

    console.log('[checkout] Incoming body:', body);

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required.' },
        { status: 400 }
      );
    }

    /* ----------------------------------------------------------
     * 1) Determine whether the price is one-time or recurring
     *    so we can pick the correct Stripe Checkout mode.
     * ---------------------------------------------------------*/
    const stripePrice = await stripe.prices.retrieve(priceId);
    const isRecurring = stripePrice.type === 'recurring';
    const mode: 'payment' | 'subscription' = isRecurring
      ? 'subscription'
      : 'payment';

    /* ----------------------------------------------------------
     * 2) Create the Checkout session with the correct mode
     * ---------------------------------------------------------*/
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
      metadata: ref ? { referral: ref } : {},
    });

    if (!session.url) {
      console.error('[checkout] Stripe returned session without URL', session);
      return NextResponse.json(
        { error: 'Failed to create checkout session: no redirect URL.' },
        { status: 500 }
      );
    }

    /* ----------------------------------------------------------
     * 3) Return JSON so the client can redirect.
     *    (Fetch + cross-origin redirect body is empty, so returning
     *    JSON avoids the “Unexpected end of JSON input” error.)
     * ---------------------------------------------------------*/
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('[checkout] Error:', error);

    // Handle bad JSON payloads
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body.' },
        { status: 400 }
      );
    }

    // Stripe-specific error information
    if ((error as any).type === 'StripeInvalidRequestError') {
      return NextResponse.json(
        {
          error: 'Stripe request failed. Check your priceId or account configuration.',
          debug:
            process.env.NODE_ENV === 'development' ? (error as any).message : undefined,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create checkout session.' },
      { status: 500 }
    );
  }
}
