import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { CompanyCard } from '@/components/CompanyCard';
import { LandingFooter } from '@/components/LandingFooter';

type IndexPageProps = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'Compare Verified Shipping Rates | TransportVibe',
  description:
    'No hidden fees. No mystery drivers. Compare vetted auto transport carriers and get a precise quote in 60 seconds.'
};

export default async function IndexPage(props: IndexPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const companies = [
    {
      name: 'AutoShip Express',
      logoInitials: 'AE',
      rating: 4.8,
      reviewCount: 2900,
      yearsInBusiness: 11,
      trustScore: 96,
      isBestChoice: true,
      performance: [
        { label: 'Pricing Accuracy', value: 92, color: 'green' as const },
        { label: 'Communication', value: 74, color: 'amber' as const },
        { label: 'Vehicle Condition', value: 84, color: 'green' as const }
      ]
    },
    {
      name: 'RoadRunner Transport',
      logoInitials: 'RT',
      rating: 4.6,
      reviewCount: 1850,
      yearsInBusiness: 8,
      trustScore: 88,
      isBestChoice: false,
      performance: [
        { label: 'Pricing Accuracy', value: 85, color: 'green' as const },
        { label: 'Communication', value: 68, color: 'amber' as const },
        { label: 'Vehicle Condition', value: 79, color: 'amber' as const }
      ]
    },
    {
      name: 'CarGo Direct',
      logoInitials: 'CD',
      rating: 4.7,
      reviewCount: 3200,
      yearsInBusiness: 14,
      trustScore: 92,
      isBestChoice: false,
      performance: [
        { label: 'Pricing Accuracy', value: 89, color: 'green' as const },
        { label: 'Communication', value: 81, color: 'green' as const },
        { label: 'Vehicle Condition', value: 91, color: 'green' as const }
      ]
    },
    {
      name: 'SwiftHaul Motors',
      logoInitials: 'SH',
      rating: 4.5,
      reviewCount: 980,
      yearsInBusiness: 5,
      trustScore: 79,
      isBestChoice: false,
      performance: [
        { label: 'Pricing Accuracy', value: 76, color: 'amber' as const },
        { label: 'Communication', value: 71, color: 'amber' as const },
        { label: 'Vehicle Condition', value: 83, color: 'green' as const }
      ]
    },
    {
      name: 'Elite Auto Movers',
      logoInitials: 'EA',
      rating: 4.9,
      reviewCount: 4100,
      yearsInBusiness: 18,
      trustScore: 98,
      isBestChoice: true,
      performance: [
        { label: 'Pricing Accuracy', value: 97, color: 'green' as const },
        { label: 'Communication', value: 94, color: 'green' as const },
        { label: 'Vehicle Condition', value: 96, color: 'green' as const }
      ]
    },
    {
      name: 'StarShip Logistics',
      logoInitials: 'SL',
      rating: 4.4,
      reviewCount: 670,
      yearsInBusiness: 3,
      trustScore: 71,
      isBestChoice: false,
      performance: [
        { label: 'Pricing Accuracy', value: 68, color: 'amber' as const },
        { label: 'Communication', value: 65, color: 'amber' as const },
        { label: 'Vehicle Condition', value: 74, color: 'amber' as const }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <div className="bg-white text-xs text-gray-500 border-b border-gray-200">
        <div className="max-w-350 mx-auto flex items-center h-12">
          <div className="flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] will-change-transform">
              <span className="inline-block pr-20">
                15K+ verified reviews &nbsp;·&nbsp; 4.5★ rating &nbsp;·&nbsp;
                FMCSA checked carriers &nbsp;·&nbsp; Real customer data
                &nbsp;·&nbsp; 15K+ verified reviews &nbsp;·&nbsp; 4.5★ rating
                &nbsp;·&nbsp; FMCSA checked carriers &nbsp;·&nbsp; Real customer
                data
              </span>
              <span className="inline-block pr-20">
                15K+ verified reviews &nbsp;·&nbsp; 4.5★ rating &nbsp;·&nbsp;
                FMCSA checked carriers &nbsp;·&nbsp; Real customer data
                &nbsp;·&nbsp; 15K+ verified reviews &nbsp;·&nbsp; 4.5★ rating
                &nbsp;·&nbsp; FMCSA checked carriers &nbsp;·&nbsp; Real customer
                data
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 px-6 shrink-0">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-gray-800 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01"
                />
              </svg>
              Help Center
            </a>
            <button className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
                />
              </svg>
              EN
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            <div className="flex items-center bg-gray-100 border border-gray-200 rounded px-2.5 py-1 gap-1.5">
              <input
                type="text"
                placeholder="Search Company"
                className="bg-transparent text-xs text-gray-600 placeholder-gray-400 outline-none w-36"
              />
              <svg
                className="w-3.5 h-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35"
                />
              </svg>
            </div>

            <div className="h-4 w-px bg-gray-300" />
            <a
              href="/sign-in"
              className="font-semibold uppercase tracking-wide text-green-600 hover:text-green-700 transition-colors"
            >
              Sign in
            </a>
            <a
              href="/sign-up"
              className="font-semibold uppercase tracking-wide text-green-600 hover:text-green-700 transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </div>

      <section
        className="relative min-h-155 overflow-hidden flex flex-col items-stretch"
        style={{
          background:
            'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), linear-gradient(145deg, #1a2a1a 0%, #0d1a2e 50%, #0a1020 100%)'
        }}
      >
        <nav className="border-b border-gray-500 sticky top-0 z-50 shadow-sm">
          <div className="max-w-350 mx-auto px-6 h-20 flex items-center justify-between gap-6">
            <a href="/" className="shrink-0">
              <img
                src="/assets/transportvibe/ic-logo-full.png"
                alt="TransportVibe"
                className="h-10 w-auto object-contain"
              />
            </a>

            <div className="flex items-center gap-5 text-sm font-medium text-gray-400">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors whitespace-nowrap"
              >
                About Us
              </a>
              <a href="#" className="hover:text-gray-500 transition-colors">
                Compare
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 hover:text-gray-500 transition-colors whitespace-nowrap"
              >
                <svg
                  className="w-3.5 h-3.5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ShipAdvisor AI
                <span className="bg-green-300/20 text-green-500 text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">
                  New
                </span>
              </a>
              <a
                href="#"
                className="hover:text-gray-500 transition-colors whitespace-nowrap"
              >
                Full Service
              </a>
              <a href="#" className="hover:text-gray-500 transition-colors">
                Companies
              </a>
              <a href="#" className="hover:text-gray-500 transition-colors">
                Stories
              </a>
              <a href="#" className="hover:text-gray-500 transition-colors">
                Resources
              </a>
              <button className="flex items-center gap-0.5 hover:text-gray-500 transition-colors">
                Tools
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button className=" text-green-900 px-4 py-2 rounded text-xs font-semibold bg-white hover:bg-gray-50 transition-colors uppercase tracking-wide">
                Leave review
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded text-xs font-bold transition-colors uppercase tracking-wide">
                Get quotes
              </button>
            </div>
          </div>
        </nav>
        <div className="relative z-10 w-full max-w-350 mx-auto px-6 py-16 flex items-start gap-8">
          <div className="flex-1 text-white pt-2">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium pb-2 mb-4 border-b border-green-400 w-max">
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>
                AI-powered trust analysis · Verified customer reviews · Real
                performance data
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 ">
              Compare Verified{' '}
              <span className="text-green-400">Shipping Rates.</span>
            </h1>

            <p className="text-2xl text-gray-100 font-light mb-12">
              No Hidden Fees. No Mystery Drivers.
            </p>

            <div className="grid grid-cols-3 max-w-180 mb-8">
              <a
                href="#"
                className="bg-green-300/30 backdrop-blur-sm p-4 hover:bg-green-500/35 transition-colors"
              >
                <div className="text-green-400 mb-2.5">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-sm text-white leading-tight">
                  Compare Companies
                </div>
                <div className="text-gray-300 text-xs mt-1">
                  Side-by-side analysis
                </div>
              </a>
              <a
                href="#"
                className="bg-green-500/25 backdrop-blur-sm p-4 hover:bg-green-500/35 transition-colors"
              >
                <div className="text-green-400 mb-2.5">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="font-semibold text-sm text-white leading-tight">
                  Ask ShipAdvisor AI
                </div>
                <div className="text-gray-300 text-xs mt-1">
                  AI-powered match
                </div>
              </a>
              <a
                href="#"
                className="bg-green-300/30 backdrop-blur-sm p-4 hover:bg-green-500/35 transition-colors"
              >
                <div className="text-green-400 mb-2.5">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3.5" strokeWidth="2" />
                  </svg>
                </div>
                <div className="font-semibold text-sm text-white leading-tight">
                  Full Service
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  We handle everything
                </div>
              </a>
            </div>

            <div className="flex items-start gap-2 text-gray-200 text-sm italic max-w-180">
              <svg
                className="w-4 h-4 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M12 16v-4m0-4h.01"
                />
              </svg>
              <span>
                We analyze thousands of vetted carriers to get you a precise
                quote in 60 seconds. Know exactly what you&apos;re paying and
                who&apos;s hauling, before you book.
              </span>
            </div>
          </div>

          <div className="w-110 shrink-0">
            <div className="overflow-hidden rounded-xl shadow-2xl bg-white">
              <div
                className="px-6 py-5 flex items-center justify-between"
                style={{ background: '#2d6a4f' }}
              >
                <div>
                  <h3 className="text-white font-bold text-2xl leading-snug">
                    Get a quick quote
                  </h3>
                  <p className="text-green-200 text-sm mt-1">
                    Or call us now at +1 (443) 388-0311
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-white text-green-700 text-base font-bold px-5 py-3 rounded-lg hover:bg-green-50 transition-colors shrink-0 ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  CALL
                </button>
              </div>

              <div className="flex items-center px-6 py-5">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold shadow-[0_0_0_4px_rgba(34,197,94,0.2)]">
                    1
                  </span>
                  <span className="text-gray-900 font-bold text-sm">
                    Destination
                  </span>
                </div>
                <div className="flex-1 h-px bg-gray-300 mx-3" />
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-9 h-9 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <span className="text-gray-500 text-sm">Vehicle</span>
                </div>
                <div className="flex-1 h-px bg-gray-300 mx-3" />
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-9 h-9 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <span className="text-gray-500 text-sm">Date</span>
                </div>
              </div>

              <div className="px-6 pb-6 space-y-4">
                <p className="text-gray-900 text-sm font-bold">
                  Transport car pickup and destination
                </p>

                <div className="relative border border-gray-200 rounded-lg">
                  <div className="flex items-center px-4 py-4 gap-3 pr-14">
                    <svg
                      className="w-5 h-5 text-gray-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <circle cx="12" cy="11" r="3" strokeWidth="2" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Pickup city or ZIP (e.g. Los Angeles, CA)"
                      className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1 min-w-0"
                    />
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div className="flex items-center px-4 py-4 gap-3 pr-14">
                    <svg
                      className="w-5 h-5 text-gray-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Delivery city or ZIP (e.g. Houston, TX)"
                      className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1 min-w-0"
                    />
                  </div>
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg shadow-sm w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-900 text-sm font-bold shrink-0">
                    Transportation type
                  </p>
                  <div className="flex rounded-lg bg-gray-100 p-1 gap-1">
                    <button className="bg-green-500 text-white text-sm font-semibold px-5 py-1.5 rounded-md hover:bg-green-600 transition-colors">
                      Open
                    </button>
                    <button className="text-gray-500 text-sm px-5 py-1.5 rounded-md hover:bg-gray-200 transition-colors">
                      Closed
                    </button>
                  </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-lg text-sm uppercase tracking-widest transition-colors">
                  Vehicle details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600">
          <div className="max-w-350 mx-auto px-6 grid grid-cols-4 divide-x divide-gray-600">
            <div className="pl-16 py-6">
              <div className="text-4xl font-bold text-green-500">15K+</div>
              <div className="text-gray-200 text-sm mt-1.5">
                Customer Reviews
              </div>
            </div>
            <div className="pl-16 py-6">
              <div className="text-4xl font-bold text-green-500">4.5+</div>
              <div className="text-gray-200 text-sm mt-1.5">Avg. Rating</div>
            </div>
            <div className="pl-16 py-6">
              <div className="text-4xl font-bold text-green-500">100%</div>
              <div className="text-gray-200 text-sm mt-1.5">FMCSA Checked</div>
            </div>
            <div className="pl-16 py-6">
              <div className="text-4xl font-bold text-green-500">50+</div>
              <div className="text-gray-200 text-sm mt-1.5">
                Verified Companies
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-350 mx-auto px-6">
          <div className="mb-12">
            <div className="mb-4">
              <span className="text-green-600 font-semibold text-sm">
                How It Works
              </span>
              <div className="w-16 h-0.5 bg-green-500 mt-1.5" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Four Steps To A Stress-Free Car Delivery.
            </h2>
            <p className="text-gray-500 text-base">
              We took the chaos out of car shipping. No guessing games, just a
              clear path from A to B.
            </p>
          </div>

          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex-1 p-8 bg-white">
              <div className="text-green-500 mb-5">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">
                1. Spot the Red Flags
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Don&apos;t get burned by fake 5-star ratings. Access our vault
                of verified video testimonials and real customer stories from
                people who have actually used these carriers.
              </p>
            </div>

            <div className="relative w-7 shrink-0 bg-gray-50">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 28 100"
                preserveAspectRatio="none"
              >
                <polygon points="0,0 28,50 0,100" fill="white" />
              </svg>
            </div>

            <div className="flex-1 p-8 bg-gray-50">
              <div className="text-green-500 mb-5">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">
                2. Compare the Cold Hard Facts
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Line up the top contenders. We break down the stuff that
                matters: insurance limits, active DOT standing, and real-world
                delivery timelines. No fluff, just data.
              </p>
            </div>

            <div className="relative w-7 shrink-0 bg-white">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 28 100"
                preserveAspectRatio="none"
              >
                <polygon points="0,0 28,50 0,100" fill="#f9fafb" />
              </svg>
            </div>

            <div className="flex-1 p-8 bg-white">
              <div className="text-green-500 mb-5">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1.5l2.268 6.27L21 9.5l-6.732 2.23L12 18l-2.268-6.27L3 9.5l6.732-1.73L12 1.5zm7 10.5.9 2.5 2.6.9-2.6.9-.9 2.5-.9-2.5-2.6-.9 2.6-.9.9-2.5z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">
                3. Get Your AI Match
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tell us where your car is and where it&apos;s going. Our Advisor
                runs the numbers and matches you with the carrier that fits your
                budget and timeline perfectly.
              </p>
            </div>

            <div className="relative w-7 shrink-0 bg-gray-50">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 28 100"
                preserveAspectRatio="none"
              >
                <polygon points="0,0 28,50 0,100" fill="white" />
              </svg>
            </div>

            <div className="flex-1 p-8 bg-gray-50">
              <div className="text-green-500 mb-5">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14v11zm-7-9h-2v2H8v2h2v2h2v-2h2v-2h-2v-2z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">
                4. Book Your Way
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Pick your favorite carrier from our list or let us manage the
                entire process for you. Either way, you get the same verified
                protection and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-350 mx-auto px-6">
          <div className="mb-12">
            <div className="mb-4">
              <span className="text-green-600 font-semibold text-sm">
                Top Companies
              </span>
              <div className="w-16 h-0.5 bg-green-500 mt-1.5" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Verified Carriers You Can Trust.
            </h2>
            <p className="text-gray-500 text-base">
              Every company is screened, scored, and reviewed by real customers.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {companies.map((company) => (
              <CompanyCard
                key={company.name}
                name={company.name}
                logoInitials={company.logoInitials}
                rating={company.rating}
                reviewCount={company.reviewCount}
                yearsInBusiness={company.yearsInBusiness}
                trustScore={company.trustScore}
                isBestChoice={company.isBestChoice}
                performance={company.performance}
              />
            ))}
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
