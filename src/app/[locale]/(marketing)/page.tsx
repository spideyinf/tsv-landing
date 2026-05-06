import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

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
                className="hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                About Us
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Compare
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors whitespace-nowrap"
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
                className="hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                Full Service
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Companies
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Stories
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Resources
              </a>
              <button className="flex items-center gap-0.5 hover:text-gray-900 transition-colors">
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

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg text-sm uppercase tracking-widest transition-colors">
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
    </div>
  );
}
