"use client";

import Link from "next/link";
import { useState } from "react";
import { translations, type Locale, getTranslation } from "../../lib/translations";

export default function TermsOfServicePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = <S extends keyof (typeof translations)["en"]>(
    section: S,
    key: keyof (typeof translations)["en"][S]
  ) => getTranslation(locale, section, key as string);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation - Reusing main site's navbar structure */}
      <nav className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-black">Calorie</span>
              <span className="text-[#ff642e]">Calc</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-gray-900">
              {t("navbar", "features")}
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900">
              {t("navbar", "pricing")}
            </Link>
            <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900">
              {t("navbar", "howItWorks")}
            </Link>
            <Link href="/#faq" className="text-gray-600 hover:text-gray-900">
              {t("navbar", "faq")}
            </Link>
            <Link
              href="/#contact"
              className="bg-[#ff642e] text-white px-6 py-2 rounded-full hover:bg-[#e54b00] transition"
            >
              {t("navbar", "contactUs")}
            </Link>
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
              <option value="it">IT</option>
              <option value="nl">NL</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Terms of Service Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#ff642e]">
          Terms of Service
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Last Updated: June 26, 2025
        </p>

        <div className="prose max-w-none md:prose-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            1. Acceptance of Terms
          </h2>
          <p>
            Welcome to CalorieCalc (also referred to as "CalorieReady", "we", "us", or "our"). By accessing or using our website at calorieready.com and our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            2. Description of Service
          </h2>
          <p>
            CalorieCalc provides an AI-powered service that generates calorie information for restaurant menu items from CSV files and provides a JavaScript overlay for display on merchant dashboards, along with regulation-compliant PDF menus. Our service is designed to assist restaurants in meeting EU calorie labeling regulations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            3. User Obligations and Restrictions
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>You must be at least 18 years old to use our services.</li>
            <li>You agree to provide accurate, current, and complete information during registration and use of the service.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You agree not to use the service for any unlawful or prohibited purpose.</li>
            <li>You shall not reverse-engineer, decompile, or disassemble any aspect of the service.</li>
            <li>You shall not upload any content that is illegal, offensive, or infringes on third-party rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            4. Payment Terms and Refund Policy
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Our services are offered on a one-time payment or subscription basis, as detailed on our pricing page.</li>
            <li>All payments are processed securely through Stripe. By making a purchase, you agree to Stripe's terms and conditions.</li>
            <li>Prices are subject to change upon notice from us.</li>
            <li>Refunds for one-time purchases may be issued within 30 days of purchase if the service has not been substantially used, at our sole discretion.</li>
            <li>Subscription fees are non-refundable, but you may cancel your subscription at any time, and it will remain active until the end of your current billing period.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            5. Intellectual Property Rights
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>All content, features, and functionality of the CalorieCalc service, including but not limited to text, graphics, logos, and software, are our exclusive property and are protected by intellectual property laws.</li>
            <li>You retain ownership of your menu data and any content you upload to the service. You grant us a limited, non-exclusive license to use this data solely for the purpose of providing and improving our services to you.</li>
            <li>The calorie calculations and PDF menus generated by our service are provided for your use in compliance with regulations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            6. Accuracy of Information and Disclaimers
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>While our AI-powered calorie calculation aims for 95%+ accuracy, it is based on estimations and publicly available nutritional data. We do not guarantee the absolute accuracy or completeness of the calorie information provided.</li>
            <li>It is your responsibility to review and verify the generated calorie information for compliance with local regulations before public display.</li>
            <li>The service is provided "as is" and "as available" without any warranties, express or implied. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            7. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, in no event shall CalorieCalc, its affiliates, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            8. Service Availability and Modifications
          </h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the service (or any part thereof) with or without notice at any time. We will not be liable to you or to any third party for any modification, suspension, or discontinuance of the service. We will make reasonable efforts to provide prior notice of any significant changes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            9. Termination
          </h2>
          <p>
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            10. Governing Law and Dispute Resolution
          </h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
          </p>
          <p>
            Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the rules of the London Court of International Arbitration (LCIA). The seat of arbitration shall be London, England.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            11. Changes to Terms
          </h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            12. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:help@calorieready.com" className="text-[#ff642e] hover:underline">help@calorieready.com</a>
          </p>
        </div>
      </main>

      {/* Footer - Reusing main site's footer structure */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold mb-4 block">
                <span className="text-white">Calorie</span>
                <span className="text-[#ff642e]">Calc</span>
              </Link>
              <p className="text-gray-400 mb-4">
                {t("footer", "description")}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {t("footer", "quickLinksTitle")}
              </h3>
              <ul className="space-y-2">
                <li><Link href="/#features" className="text-gray-400 hover:text-white">{t("navbar", "features")}</Link></li>
                <li><Link href="/#pricing" className="text-gray-400 hover:text-white">{t("navbar", "pricing")}</Link></li>
                <li><Link href="/#how-it-works" className="text-gray-400 hover:text-white">{t("navbar", "howItWorks")}</Link></li>
                <li><Link href="/#faq" className="text-gray-400 hover:text-white">{t("navbar", "faq")}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {t("footer", "legalTitle")}
              </h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">{t("footer", "legalPrivacy")}</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">{t("footer", "legalTerms")}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">{t("footer", "legalGdpr")}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {t("footer", "contactTitle")}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {t("footer", "contactEmail")}
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {t("footer", "contactLocation")}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>{t("footer", "copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
