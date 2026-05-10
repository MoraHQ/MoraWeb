const steps = [
  {
    number: "01",
    title: "You say it",
    description:
      "Speak a command or browse a product. Mora picks up on what you want, without you doing anything extra.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "It fills the gaps",
    description:
      "Mora builds a clear picture of the purchase. If something is missing, it asks once. Then it moves.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125S3.75 11.278 3.75 9m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125S3.75 13.903 3.75 11.625" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Mora buys it",
    description:
      "Mora completes the transaction on your behalf across thousands of supported merchants and platforms. You don't touch a thing.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Done",
    description:
      "Your saved payment method runs automatically. Confirmation arrives before you would have found your card.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden section-light">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4F6EF7] font-semibold mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight">
            Say it. It&apos;s done.
          </h2>
          <p className="text-[#6B7280] max-w-lg mx-auto text-balance text-[1.05rem] leading-relaxed">
            Four steps from your words to a confirmed purchase. You stay out of the flow entirely.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="glass-card relative rounded-2xl p-7 group transition-all duration-200"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block step-connector" aria-hidden />
              )}

              {/* Number */}
              <div className="text-[0.72rem] font-mono font-semibold text-[#4F6EF7]/60 tracking-widest mb-5">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl bg-[#4F6EF7]/8 border border-[#4F6EF7]/20 flex items-center justify-center mb-5 text-[#4F6EF7]">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-[#111827] text-[1rem] mb-3">{step.title}</h3>
              <p className="text-[0.95rem] text-[#6B7280] leading-relaxed">{step.description}</p>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
