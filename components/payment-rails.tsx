const rails = [
  {
    name: "Stripe Link",
    tag: "Fiat",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    description:
      "Stored payment methods via Stripe Link. Cards, bank accounts, Apple Pay, Google Pay. Tokenized — your card numbers never touch Mora's systems.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-emerald-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    features: ["Tokenized card storage", "PaymentIntent with idempotency", "Instant confirmation"],
  },
  {
    name: "MPP",
    tag: "Agent-native",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    description:
      "Machine Payment Protocol — purpose-built for AI agent transactions. Structured payment messages, agent identity assertions, and programmatic authorization flows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-indigo-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    features: ["Agent identity assertions", "Structured payment messages", "Programmatic auth flows"],
  },
  {
    name: "Tempo Mainnet",
    tag: "Crypto",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    description:
      "Crypto settlement without the friction. No wallet management, no gas fee UX, no key management burden. Users transact in crypto — Tempo handles the chain.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    features: ["No wallet required", "No gas fee complexity", "Crypto-native settlement"],
  },
];

export default function PaymentRails() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-mora-primary font-medium mb-3">
            Settlement layer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-mora-text mb-4">
            Three rails, one interface
          </h2>
          <p className="text-mora-muted max-w-lg mx-auto text-balance">
            Mora routes to the right payment rail based on merchant support and user preference.
            Fiat, crypto, or agent-native — same execution pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rails.map((rail) => (
            <div
              key={rail.name}
              className="glass rounded-2xl p-7 flex flex-col gap-5 hover:border-mora-dim transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-mora-surface-2 flex items-center justify-center">
                  {rail.icon}
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${rail.tagColor}`}>
                  {rail.tag}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-mora-text text-lg mb-2">{rail.name}</h3>
                <p className="text-sm text-mora-muted leading-relaxed">{rail.description}</p>
              </div>

              <ul className="space-y-2 mt-auto">
                {rail.features.map((f) => (
                  <li key={f} className="text-xs text-mora-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-mora-dim" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
