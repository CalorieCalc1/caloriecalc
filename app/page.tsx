/* ---------------------------
   CalorieCalc main landing page
   Now a react-client component so we can use hooks.
----------------------------*/
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { translations, type Locale, getTranslation } from "../lib/translations";
import { checkout } from "../lib/checkout";
import { getRefCookie } from "../lib/referral";
import CSVDemo from "../components/CSVDemo";

export default function Home() {
  // --------------- i18n state ---------------
  const [locale, setLocale] = useState<Locale>("en");
  const t = <S extends keyof (typeof translations)["en"], K extends string>(
    section: S,
    key: K
  ) => {
    // small helper wrapper
    return getTranslation(locale, section, key);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-black">Calorie</span>
              <span className="text-[#ff642e]">Calc</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* i18n-aware nav links */}
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              {t("navbar", "features")}
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              {t("navbar", "pricing")}
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">
              {t("navbar", "howItWorks")}
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900">
              {t("navbar", "faq")}
            </Link>
            <Link
              href="#contact"
              className="bg-[#ff642e] text-white px-6 py-2 rounded-full hover:bg-[#e54b00] transition"
            >
              {t("navbar", "contactUs")}
            </Link>

            {/* --- language switcher dropdown --- */}
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

      {/* Hero Section */}
      <section className="bg-[#ff642e] py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("hero", "headline1")}
              <br />
              {t("hero", "headline2")}
              <br />
              {t("hero", "headline3")}
            </h1>
            <p className="text-lg mb-8">
              {t("hero", "subHeadline")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="#pricing"
                className="bg-white text-[#ff642e] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                {t("hero", "getStarted")}
              </Link>
              <Link
                href="#how-it-works"
                className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition"
              >
                {t("hero", "howItWorks")}
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/menu-with-calories.svg"
              alt="Menu with calories"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">
                {t("problemSolution", "problemTitle")}
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{t("problemSolution", "problem1")}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{t("problemSolution", "problem2")}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{t("problemSolution", "problem3")}</span>
              </li>
            </ul>
          </div>
          
          {/* Solution */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">
                {t("problemSolution", "solutionTitle")}
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t("problemSolution", "solution1")}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t("problemSolution", "solution2")}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t("problemSolution", "solution3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            {t("features", "sectionTitle")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: t("features", "feature1Title"),
                description: t("features", "feature1Desc"),
                icon: "clock",
              },
              {
                title: t("features", "feature2Title"),
                description: t("features", "feature2Desc"),
                icon: "brain",
              },
              {
                title: t("features", "feature3Title"),
                description: t("features", "feature3Desc"),
                icon: "code",
              },
              {
                title: t("features", "feature4Title"),
                description: t("features", "feature4Desc"),
                icon: "file-pdf",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#ff642e] text-3xl mb-4">
                  <i className={`fas fa-${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            {t("pricing", "sectionTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold mb-2">
                {t("pricing", "basicTitle")}
              </h3>
              <p className="text-4xl font-bold text-[#ff642e] mb-6">
                {t("pricing", "basicPrice")}
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "basicFeature1")}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "basicFeature2")}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "basicFeature3")}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "basicFeature4")}
                </li>
              </ul>
              <button
                onClick={() =>
                  checkout(
                    process.env.NEXT_PUBLIC_STRIPE_BASIC as string,
                    getRefCookie()
                  )
                }
                className="block w-full py-2 px-4 bg-[#ff642e] text-white rounded-full hover:bg-[#e54b00] transition"
              >
                {t("pricing", "selectButton")}
              </button>
            </div>

            {/* Multi-Platform */}
            <div className="bg-white rounded-lg shadow-sm p-8 border-2 border-[#ff642e]">
              <h3 className="text-xl font-bold mb-2">
                {t("pricing", "multiPlatformTitle")}
              </h3>
              <p className="text-4xl font-bold text-[#ff642e] mb-6">
                {t("pricing", "multiPlatformPrice")}
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "multiPlatformFeature1")}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "multiPlatformFeature2")}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "multiPlatformFeature3")}
                </li>
              </ul>
              <button
                onClick={() =>
                  checkout(
                    process.env.NEXT_PUBLIC_STRIPE_MULTI as string,
                    getRefCookie()
                  )
                }
                className="block w-full py-2 px-4 bg-[#ff642e] text-white rounded-full hover:bg-[#e54b00] transition"
              >
                {t("pricing", "selectButton")}
              </button>
            </div>

            {/* Menu Update Subscription */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold mb-2">
                {t("pricing", "subscriptionTitle")}
              </h3>
              <p className="text-4xl font-bold text-[#ff642e] mb-6">
                {t("pricing", "subscriptionPrice")}
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "subscriptionFeature1")}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "subscriptionFeature2")}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ff642e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t("pricing", "subscriptionFeature3")}
                </li>
              </ul>
              <button
                onClick={() =>
                  checkout(
                    process.env.NEXT_PUBLIC_STRIPE_SUB as string,
                    getRefCookie()
                  )
                }
                className="block w-full py-2 px-4 bg-[#ff642e] text-white rounded-full hover:bg-[#e54b00] transition"
              >
                {t("pricing", "selectButton")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("howItWorks", "sectionTitle")}
          </h2>
          <ol className="space-y-12 max-w-3xl mx-auto">
            {[
              {
                title: t("howItWorks", "step1Title"),
                description: t("howItWorks", "step1Desc")
              },
              {
                title: t("howItWorks", "step2Title"),
                description: t("howItWorks", "step2Desc")
              },
              {
                title: t("howItWorks", "step3Title"),
                description: t("howItWorks", "step3Desc")
              },
              {
                title: t("howItWorks", "step4Title"),
                description: t("howItWorks", "step4Desc")
              }
            ].map((step, i) => (
              <li key={i} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-[#ff642e] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Interactive CSV Demo */}
      <section id="demo" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interactive CSV Demo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upload or preview a sample menu CSV and see how CalorieCalc adds
              calorie information in seconds.
            </p>
          </div>
          <CSVDemo />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("faq", "sectionTitle")}
          </h2>
          <div className="space-y-6">
            {[
              {
                q: t("faq", "q1"),
                a: t("faq", "a1")
              },
              {
                q: t("faq", "q2"),
                a: t("faq", "a2")
              },
              {
                q: t("faq", "q3"),
                a: t("faq", "a3")
              },
              {
                q: t("faq", "q4"),
                a: t("faq", "a4")
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("contact", "sectionTitle")}
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    {t("contact", "labelRestaurantName")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ff642e] focus:border-[#ff642e]"
                    placeholder={t("contact", "placeholderRestaurantName")}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    {t("contact", "labelEmail")}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ff642e] focus:border-[#ff642e]"
                    placeholder={t("contact", "placeholderEmail")}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium">
                    {t("contact", "labelPlatform")}
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ff642e] focus:border-[#ff642e]">
                    <option value="" disabled selected>
                      {t("contact", "placeholderPlatform")}
                    </option>
                    <option value="uber">{t("contact", "platformOptionUber")}</option>
                    <option value="deliveroo">{t("contact", "platformOptionDeliveroo")}</option>
                    <option value="just-eat">{t("contact", "platformOptionJustEat")}</option>
                    <option value="other">{t("contact", "platformOptionOther")}</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium">
                    {t("contact", "labelMessage")}
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ff642e] focus:border-[#ff642e]"
                    rows={4}
                    placeholder={t("contact", "placeholderMessage")}
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-[#ff642e] text-white font-medium rounded-full hover:bg-[#e54b00] transition"
                  >
                    {t("contact", "buttonSend")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {t("footer", "legalTitle")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    {t("footer", "legalPrivacy")}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    {t("footer", "legalTerms")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy#gdpr" className="text-gray-400 hover:text-white">
                    {t("footer", "legalGdpr")}
                  </Link>
                </li>
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
