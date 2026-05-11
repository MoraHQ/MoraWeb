export default function Developers() {
  return (
    <section id="developers" className="relative py-24 px-6 overflow-hidden section-light">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left - copy */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#4F6EF7] font-semibold mb-5">
              For developers
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-6 leading-tight">
              Add purchasing to
              <br />
              <span className="text-[#4F6EF7]">your AI application.</span>
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-10 text-[1.05rem]">
              One API call. Works with major AI models including Claude, GPT-4, and Gemini. Mora handles the rest — no checkout infrastructure, no payment UI, no merchant integrations to build.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Mora API",
                  desc: "Claude, GPT-4, Gemini. Any model can trigger a real purchase with a single call. Zero glue code.",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-[#4F6EF7]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  ),
                },
                {
                  title: "Broad Merchant Coverage",
                  desc: "Thousands of merchants and platforms supported. If it has a checkout, Mora is likely compatible — and growing.",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-[#4F6EF7]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  ),
                },
                {
                  title: "Built for scale",
                  desc: "From a single agent to millions of transactions. Mora grows with your product.",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-[#4F6EF7]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card flex gap-4 group rounded-xl p-4 transition-all duration-200"
                >
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-xl bg-[#4F6EF7]/8 border border-[#4F6EF7]/20 flex items-center justify-center group-hover:bg-[#4F6EF7]/12 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[1rem] font-semibold text-[#111827] mb-1">{item.title}</h4>
                    <p className="text-[0.875rem] text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - code block (intentionally dark) */}
          <div className="code-block p-7 overflow-x-auto relative">
            {/* Top chrome bar */}
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-4 text-xs text-white/30 font-mono">mora-example.ts</span>
            </div>

            {/* Code */}
            <pre className="text-xs leading-[1.9] text-white/75 overflow-x-auto">
              <code>
                <span className="text-white/40">{`// Trigger a purchase from any AI model`}</span>{"\n"}
                <span className="text-fuchsia-400">const</span>
                {` result = `}
                <span className="text-fuchsia-400">await</span>
                {` `}
                <span className="text-white/80">mora</span>
                {`.`}
                <span className="text-white/80">tools</span>
                {`.execute({`}
                {"\n"}
                {"  tool: "}
                <span className="text-emerald-400">{`"mora_execute_purchase"`}</span>
                {`,`}
                {"\n"}
                {"  input: {"}
                {"\n"}
                {"    intent: "}
                <span className="text-emerald-400">{`"Book a table at Nobu for 4 at 7pm tonight"`}</span>
                {`,`}
                {"\n"}
                {"    userId: "}
                <span className="text-emerald-400">{`"usr_abc123"`}</span>
                {`,`}
                {"\n"}
                {"  },"}
                {"\n"}
                {"});"}
                {"\n\n"}
                <span className="text-white/40">{`// result.confirmation`}</span>
                {"\n"}
                <span className="text-white/40">{`// → { id: "res_xyz", status: "confirmed",`}</span>
                {"\n"}
                <span className="text-white/40">{`//     restaurant: "Nobu Tribeca",`}</span>
                {"\n"}
                <span className="text-white/40">{`//     date: "2025-05-08", time: "19:00",`}</span>
                {"\n"}
                <span className="text-white/40">{`//     party: 4, ref: "OT-9382711" }`}</span>
              </code>
            </pre>

            {/* Gradient fade at bottom */}
            <div
              className="absolute bottom-7 left-0 right-0 h-12 pointer-events-none"
              style={{ background: "linear-gradient(to top, #040810, transparent)" }}
              aria-hidden
            />
          </div>
        </div>
      </div>

    </section>
  );
}
