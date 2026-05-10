const rails = [
  {
    benefit: "Cards & Bank",
    label: "Fiat",
    tagStyle: "text-emerald-700 bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    description:
      "Cards, bank accounts, Apple Pay, Google Pay. Your saved methods run automatically. Card details are tokenized and handled by certified payment processors — Mora does not store your raw payment credentials.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    features: ["Tokenized card storage", "Built-in duplicate-charge protection", "Instant confirmation"],
  },
  {
    benefit: "Agent Payments",
    label: "Agent-native",
    tagStyle: "text-[#4F6EF7] bg-[#4F6EF7]/8 border-[#4F6EF7]/25",
    iconBg: "bg-[#4F6EF7]/8 border-[#4F6EF7]/20",
    iconColor: "text-[#4F6EF7]",
    description:
      "A payment rail built for AI agents. Transactions execute within developer-defined spending rules. User authorization is configured at setup — no redirects, no waiting.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    features: ["User-configured spending rules", "Programmatic authorization", "Fast execution"],
  },
  {
    benefit: "Crypto",
    label: "Crypto — Coming Soon",
    tagStyle: "text-[#818CF8] bg-[#818CF8]/8 border-[#818CF8]/25",
    iconBg: "bg-[#818CF8]/8 border-[#818CF8]/20",
    iconColor: "text-[#818CF8]",
    description:
      "Crypto payment support is in development and subject to regulatory review. Availability will vary by jurisdiction. We'll share updates as this rail approaches launch.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    features: ["In development", "Subject to regulatory approval", "Jurisdiction-dependent availability"],
  },
];

export default function PaymentRails() {
  return (
    <section className="relative py-24 px-6 overflow-hidden section-light">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4F6EF7] font-semibold mb-4">
            Payment rails
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight">
            Three rails, one interface
          </h2>
          <p className="text-[#6B7280] max-w-lg mx-auto text-balance text-[1.05rem] leading-relaxed">
            Mora picks the right rail based on merchant support and your preference. Fiat, crypto, or agent-native, it all looks the same from your side.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rails.map((rail) => (
            <div
              key={rail.benefit}
              className="glass-card rounded-2xl p-7 flex flex-col gap-6 group relative overflow-hidden transition-all duration-200"
            >
              <div className="relative z-10">
                {/* Icon + Tag row */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${rail.iconBg} ${rail.iconColor}`}
                  >
                    {rail.icon}
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full border font-semibold tracking-wide ${rail.tagStyle}`}>
                    {rail.label}
                  </span>
                </div>

                <h3 className="font-bold text-[#111827] text-xl mb-3">{rail.benefit}</h3>
                <p className="text-[0.95rem] text-[#6B7280] leading-relaxed">{rail.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mt-auto relative z-10">
                {rail.features.map((f) => (
                  <li key={f} className="text-xs text-[#6B7280] flex items-center gap-2.5">
                    <div className="w-3.5 h-px bg-[#4F6EF7]/40 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="divider-gradient max-w-6xl mx-auto mt-20" />
    </section>
  );
}
