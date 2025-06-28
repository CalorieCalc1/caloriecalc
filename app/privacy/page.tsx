"use client";

import Link from "next/link";
import { useState } from "react";
import { translations, type Locale, getTranslation } from "../../lib/translations";

export default function PrivacyPolicyPage() {
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

      {/* Privacy Policy Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#ff642e]">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Last Updated: June 26, 2025
        </p>

        <div className="prose max-w-none md:prose-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            1. Introduction
          </h2>
          <p>
            CalorieCalc (also referred to as "CalorieReady", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website calorieready.com and use our services.
          </p>
          <p>
            We adhere to the General Data Protection Regulation (GDPR) and other applicable data protection laws. By accessing or using our service, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            2. Information We Collect
          </h2>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
            2.1 Personal Data
          </h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Register for an account:</strong> Name, email address, restaurant name, and contact details.</li>
            <li><strong>Make a purchase:</strong> Payment information (processed by Stripe), billing address, and transaction history.</li>
            <li><strong>Contact us:</strong> Name, email address, and any information you include in your message.</li>
            <li><strong>Subscribe to our newsletter:</strong> Email address and communication preferences.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
            2.2 Menu and File Upload Data
          </h3>
          <p>
            When you use our services, we collect information contained in the files you upload:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>CSV menu files:</strong> Menu item names, descriptions, prices, and other food-related information.</li>
            <li><strong>Analysis data:</strong> Calorie calculations and nutritional information generated from your menu data.</li>
            <li><strong>Usage patterns:</strong> How you interact with the analysis tools and which features you use.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
            2.3 Automatically Collected Information
          </h3>
          <p>
            When you access our website, we automatically collect certain information:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Device information:</strong> IP address, browser type, operating system, device information, and usage data.</li>
            <li><strong>Cookies and similar technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            3. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Provide, maintain, and improve our services, including calorie calculations and menu analysis.</li>
            <li>Process transactions and send related information, including confirmations, invoices, and customer support messages.</li>
            <li>Send you technical notices, updates, security alerts, and administrative messages.</li>
            <li>Respond to your comments, questions, and customer service requests.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
            <li>Personalize your experience and provide content and features relevant to your needs.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            4. Your Rights Under GDPR
          </h2>
          <p>If you are a resident of the European Union, you have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Right to access: You can request copies of your personal data.</li>
            <li>Right to rectification: You can request that we correct inaccurate information about you.</li>
            <li>Right to erasure: You can request that we delete your personal data in certain circumstances.</li>
            <li>Right to restrict processing: You can request that we restrict the processing of your data in certain circumstances.</li>
            <li>Right to data portability: You can request that we transfer your data to another organization or directly to you.</li>
            <li>Right to object: You can object to our processing of your personal data.</li>
            <li>Rights related to automated decision-making: You have rights related to how we use your data for automated decisions.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            5. Cookies and Tracking Technologies
          </h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Essential cookies: Required for the operation of our website.</li>
            <li>Analytical/performance cookies: Allow us to recognize and count visitors and analyze website usage.</li>
            <li>Functionality cookies: Enable us to personalize content for you.</li>
            <li>Targeting cookies: Record your visit to our website, the pages you visit, and the links you follow.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            6. Third-Party Services
          </h2>
          <p>We may use third-party service providers to help us operate our business and the website or administer activities on our behalf, such as sending out newsletters or surveys.</p>
          <p>Key third-party services we use include:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Stripe:</strong> For payment processing. When you make a purchase, your payment information is collected and processed by Stripe. We do not store your full payment details on our servers. For more information, please see Stripe's Privacy Policy.</li>
            <li><strong>Email marketing services:</strong> For sending newsletters and marketing communications to users who have opted in.</li>
            <li><strong>Analytics providers:</strong> To help us understand how users interact with our website.</li>
            <li><strong>Cloud storage providers:</strong> For securely storing menu data and analysis results.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            7. Data Security
          </h2>
          <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            8. Data Retention
          </h2>
          <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            9. Contact Us
          </h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
          <p>
            Email: <a href="mailto:Hi@calorieready.com" className="text-[#ff642e] hover:underline">Hi@calorieready.com</a> or <a href="mailto:help@calorieready.com" className="text-[#ff642e] hover:underline">help@calorieready.com</a>
          </p>
          <p>
            Address: London, UK
          </p>
          <p>
            For data protection inquiries specifically, please email <a href="mailto:help@calorieready.com" className="text-[#ff642e] hover:underline">help@calorieready.com</a> with the subject line "Data Protection Inquiry."
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
