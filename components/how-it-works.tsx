const steps = [
  {
    number: "01",
    title: "Intent Captured",
    description:
      "Siri detects a purchase intent from your voice or the browser extension picks up shopping signals. Context is extracted and routed to Mora.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Object Enriched",
    description:
      "A typed purchase object is constructed from the extracted context. Any missing fields are filled through a guided conversational loop — Mora asks, you answer once.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125S3.75 11.278 3.75 9m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125S3.75 13.903 3.75 11.625" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Purchase Executed",
    description:
      "Mora routes to the merchant's API directly if available. If not, a headless Chromium browser session completes the checkout — intercepting internal network calls for speed.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Payment Settled",
    description:
      "Payment is routed through Stripe Link, MPP, or Tempo Mainnet — based on merchant support and user preference. Confirmation delivered instantly.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-mora-primary font-medium mb-3">
            The pipeline
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-mora-text mb-4">
            From intent to confirmation
          </h2>
          <p className="text-mora-muted max-w-lg mx-auto text-balance">
            Four steps. No manual intervention. Every state transition is durable — the pipeline
            survives crashes and resumes exactly where it left off.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative glass rounded-2xl p-6 group hover:border-mora-dim transition-all">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-9 -right-2 w-4 h-px bg-mora-border z-10" />
              )}

              {/* Step number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-mora-primary/60">{step.number}</span>
                <div className="w-9 h-9 rounded-xl bg-mora-surface-2 flex items-center justify-center text-mora-primary">
                  {step.icon}
                </div>
              </div>

              <h3 className="font-semibold text-mora-text mb-2">{step.title}</h3>
              <p className="text-sm text-mora-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
