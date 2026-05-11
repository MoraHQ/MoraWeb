export default function Pillars() {
  return (
    <section id="product" className="relative py-24 px-6 overflow-hidden section-light">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4F6EF7] font-semibold mb-4">
            Two products
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight">
            Web or voice. Both covered.
          </h2>
          <p className="text-[#6B7280] max-w-lg mx-auto text-balance text-[1.05rem] leading-relaxed">
            Mora works wherever you do. Browsing a site or talking out loud, it picks up the intent and takes over.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Checkout Ghost */}
          <div
            className="glass-card rounded-3xl p-9 group relative overflow-hidden transition-all duration-200"
          >
            <div className="relative z-10">
              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4F6EF7]/8 border border-[#4F6EF7]/20 text-[#4F6EF7] text-xs font-semibold tracking-wide mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7]" />
                Browser Extension
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#4F6EF7]/8 border border-[#4F6EF7]/20 flex items-center justify-center mb-7 text-[#4F6EF7] group-hover:border-[#4F6EF7]/40 transition-colors duration-300">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#111827] mb-4">Checkout Ghost</h3>
              <p className="text-[#6B7280] leading-relaxed mb-8 text-[1rem]">
                Runs quietly in your browser. When it spots purchase intent on any page, it surfaces as a small conversational overlay. You confirm. It buys. Budget-aware, never intrusive.
              </p>

              <ul className="space-y-3">
                {[
                  "Detects intent from browsing activity",
                  "Proposes, never assumes",
                  "Works within the budget and preferences you set",
                  "Cross-merchant price comparison (coming soon)",
                ].map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[#6B7280]">
                    <div className="w-4 h-4 rounded-full bg-[#4F6EF7]/10 border border-[#4F6EF7]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="text-[#4F6EF7]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Voice Rerouter */}
          <div
            className="glass-card rounded-3xl p-9 group relative overflow-hidden transition-all duration-200"
          >
            <div className="relative z-10">
              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/8 border border-[#F59E0B]/25 text-[#D97706] text-xs font-semibold tracking-wide mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                Mobile Agent · iOS — Private Beta
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/8 border border-[#F59E0B]/20 flex items-center justify-center mb-7 text-[#D97706] group-hover:border-[#F59E0B]/40 transition-colors duration-300">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#111827] mb-4">Voice Rerouter</h3>
              <p className="text-[#6B7280] leading-relaxed mb-8 text-[1rem]">
                Talk to your phone like you always do. When Mora catches a booking or purchase intent, it takes over, fills in what it needs, and wraps the transaction. No app switching.
              </p>

              <ul className="space-y-3">
                {[
                  "Restaurants, hotels, flights, car rentals",
                  "Converses naturally to get what it needs, then acts",
                  "Confirms before every transaction",
                  "Google Assistant support (coming soon)",
                ].map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[#6B7280]">
                    <div className="w-4 h-4 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="text-[#D97706]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider-gradient max-w-6xl mx-auto mt-20" />
    </section>
  );
}
