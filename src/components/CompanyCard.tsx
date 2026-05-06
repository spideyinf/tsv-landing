type PerformanceBar = {
  label: string;
  value: number;
  color: 'green' | 'amber';
};

type CompanyCardProps = {
  name: string;
  logoInitials: string;
  rating: number;
  reviewCount: number;
  yearsInBusiness: number;
  trustScore: number;
  isBestChoice: boolean;
  performance: PerformanceBar[];
};

export function CompanyCard(props: CompanyCardProps) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden border border-[#30CB65] shadow-[0px_4px_10px_rgba(48,203,101,0.5)] flex flex-col">
      <div
        className="relative h-22.5"
        style={{
          background: 'linear-gradient(135deg, #1b5e3b 0%, #2d9b60 100%)'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(225deg, rgba(255,255,255,0.18) 0%, transparent 55%)'
          }}
        />
        {props.isBestChoice && (
          <div
            className="absolute top-4 right-0 bg-green-600 text-white text-[10px] font-extrabold tracking-widest pl-7 pr-4 py-2"
            style={{
              clipPath:
                'polygon(20px 0%, 100% 0%, 100% 100%, 20px 100%, 0% 50%)'
            }}
          >
            BEST CHOICE
          </div>
        )}
      </div>

      <div className="px-6 -mt-6 mb-4 relative z-10 flex gap-3 items-end">
        <div className="w-20 h-20 rounded-xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-white shadow-md">
          {props.logoInitials}
        </div>
        <div className="mt-1">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-gray-900 text-lg leading-tight">
              {props.name}
            </span>
            <svg
              className="w-4 h-4 text-green-500 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="font-semibold text-gray-700 text-xs">
              {props.rating}
            </span>
            <span className="text-gray-400 text-xs">
              ({props.reviewCount.toLocaleString()} reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pt-2 pb-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
            Low Risk
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
            FMCSA Certified
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-700">
            2 Complaints
          </span>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-4 border-green-500 flex items-center justify-center shrink-0">
              <span className="text-gray-900 font-bold text-base leading-none">
                {props.trustScore}
              </span>
            </div>
            <div>
              <div className="text-[11px] text-gray-400">Trust Score</div>
              <div className="font-bold text-gray-900 text-sm">
                Highly Trusted
              </div>
            </div>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700 shrink-0">
            Low Risk
          </span>
        </div>

        <div className="space-y-3 mb-6 flex-1">
          {props.performance.map((perf) => (
            <div key={perf.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">{perf.label}</span>
                <span
                  className={
                    perf.color === 'green'
                      ? 'font-semibold text-green-600'
                      : 'font-semibold text-amber-500'
                  }
                >
                  {perf.value}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={
                    perf.color === 'green'
                      ? 'h-full rounded-full bg-green-500'
                      : 'h-full rounded-full bg-amber-400'
                  }
                  style={{ width: `${perf.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg text-sm uppercase tracking-wide transition-colors mb-2">
          View Details
        </button>
        <p className="text-center text-xs text-gray-800">
          {props.reviewCount.toLocaleString()} verified reviews ·{' '}
          {props.yearsInBusiness}yrs
        </p>
      </div>
    </div>
  );
}
