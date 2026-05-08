export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden grid-bg">
      {/* Background orbs */}
      <div
        className="orb absolute w-[600px] h-[600px] bg-indigo-600 -top-32 -right-32"
        aria-hidden
      />
      <div
        className="orb absolute w-[500px] h-[500px] bg-violet-700 -bottom-20 -left-20"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mora-border bg-mora-surface/60 text-xs text-mora-muted mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-slow" />
          Now in private beta
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-mora-text leading-[1.05] mb-6">
          Remove the delay.
          <br />
          <span className="gradient-text">Pay at the speed of intent.</span>
        </h1>

        {/* Sub */}
        <p className="max-w-2xl mx-auto text-lg text-mora-muted leading-relaxed mb-10 text-balance">
          Mora is a headless financial ecosystem that enables AI agents to plan, negotiate,
          and settle transactions across any web or mobile platform — no manual checkouts,
          no wallet friction, in under a second.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#waitlist"
            className="px-6 py-3 rounded-lg bg-mora-primary hover:bg-indigo-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Get early access
          </a>
          <a
            href="https://github.com/Mora-delay/mora-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-mora-border text-mora-muted hover:text-mora-text hover:border-mora-dim transition-colors flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 mt-20 w-full max-w-3xl mx-auto glass rounded-2xl px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-mora-border">
          {[
            { value: "< 1s", label: "Execution time" },
            { value: "0", label: "Manual steps" },
            { value: "3", label: "Payment rails" },
            { value: "Any", label: "Merchant" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:px-6">
              <div className="text-2xl font-bold text-mora-text">{stat.value}</div>
              <div className="text-xs text-mora-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
