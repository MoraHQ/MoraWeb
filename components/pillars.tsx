export default function Pillars() {
  return (
    <section id="product" className="py-28 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="orb absolute w-[400px] h-[400px] bg-violet-700 top-0 left-1/2 -translate-x-1/2 opacity-10" aria-hidden />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-mora-primary font-medium mb-3">
            Two execution pillars
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-mora-text mb-4">
            Every surface, covered
          </h2>
          <p className="text-mora-muted max-w-lg mx-auto text-balance">
            Whether you&apos;re browsing the web or talking to Siri, Mora intercepts the intent
            and handles the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Checkout Ghost */}
          <div className="glass rounded-3xl p-8 group hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-indigo-600/5 border border-indigo-500/20 flex items-center justify-center mb-6">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-indigo-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
              Browser Extension
            </div>

            <h3 className="text-xl font-bold text-mora-text mb-3">Checkout Ghost</h3>
            <p className="text-mora-muted leading-relaxed mb-6">
              Passively monitors your browsing activity. The moment it detects purchase intent —
              a product page, a cart, a price comparison — it surfaces as a conversational assistant.
              Budget-aware. Not intrusive. You stay in control.
            </p>

            <ul className="space-y-2.5">
              {[
                "Intent detection from browsing signals",
                "Conversational overlay — propose, not impose",
                "Budget and preference aware",
                "Cross-merchant price comparison (coming soon)",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-sm text-mora-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-indigo-400 mt-0.5 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Voice Rerouter */}
          <div className="glass rounded-3xl p-8 group hover:border-violet-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600/20 to-violet-600/5 border border-violet-500/20 flex items-center justify-center mb-6">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-violet-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
              iOS Native Agent
            </div>

            <h3 className="text-xl font-bold text-mora-text mb-3">Siri / Voice Rerouter</h3>
            <p className="text-mora-muted leading-relaxed mb-6">
              OS-level interception via Apple App Intents. When Siri hears a purchase or planning
              intent, Mora takes the handoff — searches, collects the required information, and
              completes the transaction without you lifting a finger.
            </p>

            <ul className="space-y-2.5">
              {[
                "Restaurant, hotel, flight, car reservations",
                "Guided conversation for missing context",
                "Confirmation before execution — always",
                "Google Assistant support (coming soon)",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-sm text-mora-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-violet-400 mt-0.5 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
