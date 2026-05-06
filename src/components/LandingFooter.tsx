export function LandingFooter() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="max-w-350 mx-auto px-8 pt-15 pb-5 flex flex-col gap-10">
        <div
          className="rounded-lg px-10 py-8 flex flex-col gap-5"
          style={{
            background: 'linear-gradient(95deg, #135128 44%, #1e7040 100%)'
          }}
        >
          <div className="flex flex-col gap-1.5">
            <h3 className="text-white text-3xl font-semibold">
              Get Exclusive Deals And Shipping Tips
            </h3>
            <p className="text-white text-sm">
              Subscribe to our newsletter to get exclusive deal and tips for
              your next shipping
            </p>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 bg-white border border-[#E5E5E5] rounded-md px-3 py-3 text-sm placeholder-[#BDBDBD] outline-none"
            />
            <input
              type="tel"
              placeholder="Your phone"
              className="flex-1 bg-white border border-[#E5E5E5] rounded-md px-3 py-3 text-sm placeholder-[#BDBDBD] outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-white border border-[#E5E5E5] rounded-md px-3 py-3 text-sm placeholder-[#BDBDBD] outline-none"
            />
            <button className="bg-[#30CB65] hover:bg-green-500 text-[#FAFAFA] text-xs font-bold px-7 py-3 rounded-sm whitespace-nowrap uppercase tracking-wide transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-white text-xs italic opacity-60">
            No spam, unsubscribe anytime
          </p>
        </div>

        <div className="grid grid-cols-[360px_1fr_1fr_1fr_1fr] gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <img
                src="/assets/transportvibe/ic-logo-full-color.png"
                alt="TransportVibe"
                className="h-10 w-auto object-contain"
              />
              <p className="text-sm text-gray-700 leading-snug mt-4 max-w-72">
                The trust-driven marketplace for auto transport. Compare
                verified brokers, read real reviews, and get AI-powered
                recommendations.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#EDEDED] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#333]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#EDEDED] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#333]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#EDEDED] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#333]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#EDEDED] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#333]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#EDEDED] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#333]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .379-.24l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.464.463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#EDEDED] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#333]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#EDEDED] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#333]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641 0 12.017 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#767575] font-semibold text-base mb-6">
              Main
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Compare
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  ShipAdvisor AI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Full Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#767575] font-semibold text-base mb-6">
              For Customers
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#767575] font-semibold text-base mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Website Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Content Moderation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Neutral Language
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#767575] text-sm hover:text-gray-900 transition-colors"
                >
                  Use-submitted Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#767575] font-semibold text-base mb-6">
              Contact
            </h4>
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    className="w-4 h-4 text-[#767575]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-[#767575] text-sm">Phone</span>
                </div>
                <a
                  href="tel:+14433880311"
                  className="text-[#26A251] font-semibold text-base underline"
                >
                  +1 (443) 388-0311
                </a>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    className="w-4 h-4 text-[#767575]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-[#767575] text-sm">Whatsapp</span>
                </div>
                <a
                  href="tel:+14433880311"
                  className="text-[#26A251] font-semibold text-base underline"
                >
                  +1 (443) 388-0311
                </a>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    className="w-4 h-4 text-[#767575]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-[#767575] text-sm">Email</span>
                </div>
                <a
                  href="mailto:info@transportvibe.com"
                  className="text-[#26A251] font-semibold text-base"
                >
                  info@transportvibe.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] pt-5 flex items-center justify-between">
          <p className="text-[11px] text-[#71717A]">
            © 2026 Transportvibe. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <img
              src="/assets/transportvibe/ic-visa.png"
              alt="Visa"
              className="h-5 w-auto object-contain"
            />
            <img
              src="/assets/transportvibe/ic-amex.png"
              alt="Amex"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/assets/transportvibe/ic-apple-pay.png"
              alt="Apple Pay"
              className="h-6 w-auto object-contain"
            />
            <img
              src="/assets/transportvibe/ic-paypal.png"
              alt="PayPal"
              className="h-5 w-auto object-contain"
            />
            <img
              src="/assets/transportvibe/ic-venmo.png"
              alt="Venmo"
              className="h-4 w-auto object-contain"
            />
            <img
              src="/assets/transportvibe/ic-discover.png"
              alt="Discover"
              className="h-5 w-auto object-contain"
            />
            <img
              src="/assets/transportvibe/ic-master-card.png"
              alt="Mastercard"
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>

        <div className="bg-[#E5E5E5] rounded px-6 py-6">
          <p className="text-[11px] text-[#52525A] leading-4.5 font-light">
            Disclaimer: Transportvibe is an independent review platform. We are
            not affiliated with any car shipping companies. Our ratings are
            based on publicly available data including FMCSA records, Trustpilot
            reviews, BBB ratings, and customer feedback. Always verify current
            pricing and availability directly with the shipping company before
            making a decision. Precision analytics are provided as guidance and
            do not constitute a legal guarantee of performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
