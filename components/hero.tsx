export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,110,247,0.28) 0%, transparent 60%), linear-gradient(to bottom, #080D1A 0%, #080D1A 28%, #0E1838 46%, #1E3060 60%, #4A6098 72%, #96A8CC 82%, #C8D2E8 90%, #EEF1FB 100%)",
      }}
    >
      {/* Top fade — softens nav edge */}
      <div
        className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, rgba(211,217,233,0.12) 0%, transparent 100%)" }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="badge mb-10 mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse-slow flex-shrink-0" />
          Private beta
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-bold tracking-tight text-[#F0F4FF] leading-[1.04] mb-7">
          AI that completes
          <br />
          <span className="text-[#4F6EF7]">the loop.</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-[1.1rem] text-white/60 leading-relaxed mb-12 text-balance">
          Mora gives AI agents the ability to complete tasks — purchases, bookings, and more — across thousands of merchants and platforms. No forms, no redirects, no waiting.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[15px] bg-[#F59E0B] text-[#111827] hover:bg-[#D97706] transition-colors duration-200"
          >
            Join the waitlist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/80 font-medium text-[15px] hover:bg-white/[0.06] hover:border-white/30 transition-all duration-200"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 mt-20 w-full max-w-3xl mx-auto">
        <div
          className="rounded-2xl px-8 py-6"
          style={{
            background: "rgba(14,20,40,0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(79,110,247,0.20)",
          }}
        >
          <div className="grid grid-cols-3 gap-6 md:gap-0 md:divide-x divide-white/10">
            {[
              { value: "< 30s", label: "Typical transaction", accent: "text-[#818CF8]" },
              { value: "0", label: "Steps for you", accent: "text-[#F59E0B]" },
              { value: "3", label: "Payment rails", accent: "text-[#818CF8]" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:px-6">
                <div className={`text-2xl font-bold ${stat.accent}`}>{stat.value}</div>
                <div className="text-xs text-white/40 mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade — hero to body */}
      <div
        className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(200,210,232,0.2) 30%, rgba(220,228,244,0.55) 55%, rgba(238,241,251,0.88) 75%, #EEF1FB 100%)" }}
        aria-hidden
      />
    </section>
  );
}
