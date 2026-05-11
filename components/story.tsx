export default function Story() {
  return (
    <section id="story" className="relative py-24 px-6 overflow-hidden section-light">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4F6EF7] font-semibold mb-4">
            Why Mora
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight text-balance">
            The assistant used to cost extra.
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-balance text-[1.05rem] leading-relaxed">
            For a long time, getting help meant having money. CEOs don&apos;t open apps to book dinner. They say it out loud. Someone handles it.
          </p>
        </div>


        {/* Main contrast card */}
        <div className="glass-card rounded-3xl overflow-hidden">
          {/* Before / After row */}
          <div className="grid md:grid-cols-2">

            {/* LEFT: Before */}
            <div className="relative p-10 border-b md:border-b-0 md:border-r border-[rgba(201,208,228,0.50)]" style={{ background: "rgba(211,217,233,0.30)" }}>
              {/* Faint cross-hatch overlay */}
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #6B7280 0, #6B7280 1px, transparent 0, transparent 50%)",
                  backgroundSize: "12px 12px",
                }}
                aria-hidden
              />

              <div className="relative z-10">
                {/* Label pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 bg-gray-100 text-[#6B7280] text-xs font-semibold tracking-wide mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  Before
                </div>

                <h3 className="text-xl font-bold text-[#374151] mb-5 leading-snug">
                  Reserved for the corner office
                </h3>

                {/* Friction timeline */}
                <ol className="space-y-5">
                  {[
                    {
                      label: "Find the vendor",
                      detail: "Search, compare, open 12 tabs.",
                    },
                    {
                      label: "Fill every form",
                      detail: "Billing, shipping, card details. All of it, again.",
                    },
                    {
                      label: "Wait on hold",
                      detail: "Press 1, press 2, explain yourself.",
                    },
                    {
                      label: "Follow up",
                      detail: "Chase the confirmation email.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                        <span className="text-[0.6rem] font-mono text-gray-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#374151] leading-tight">
                          {item.label}
                        </p>
                        <p className="text-xs text-[#6B7280] mt-0.5">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Cost line */}
                <div className="mt-8 flex items-center gap-3 text-xs text-[#9CA3AF]">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Online purchases take an average of 20–40 minutes of effort — searching, comparing, filling forms.
                </div>
              </div>
            </div>

            {/* RIGHT: After Mora */}
            <div
              className="relative p-10"
              style={{ background: "rgba(79,110,247,0.04)" }}
            >
              <div className="relative z-10">
                {/* Label pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4F6EF7]/30 bg-[#4F6EF7]/8 text-[#4F6EF7] text-xs font-semibold tracking-wide mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7] animate-pulse-slow" />
                  After Mora
                </div>

                <h3 className="text-xl font-bold text-[#111827] mb-5 leading-snug">
                  Your Mora just handled it
                </h3>

                {/* Success steps */}
                <ol className="space-y-5">
                  {[
                    {
                      label: "You said the word",
                      detail: "One sentence, out loud or while browsing.",
                    },
                    {
                      label: "Mora confirmed the details",
                      detail: "A quick back-and-forth to nail the details.",
                    },
                    {
                      label: "Transaction completed",
                      detail: "Paid, booked, confirmed.",
                    },
                    {
                      label: "Receipt in your inbox",
                      detail: "Before you looked back at your phone.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border border-[#4F6EF7]/30 bg-white flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="text-[#4F6EF7]" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#111827] leading-tight">
                          {item.label}
                        </p>
                        <p className="text-xs text-[#6B7280] mt-0.5">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Time line */}
                <div className="mt-8 flex items-center gap-3 text-xs text-[#4F6EF7]/80">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  From intent to confirmed — fast.
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#E5E7EB]" />

          {/* Story + Quote row */}
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0" style={{ background: "rgba(240,244,253,0.60)" }}>

            {/* Story narrative */}
            <div className="p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-[#4F6EF7] font-semibold mb-5">
                Picture this
              </p>
              <p className="text-[0.65rem] text-[#9CA3AF] uppercase tracking-widest mb-3">Illustrative scenario</p>
              <p className="text-[0.95rem] text-[#6B7280] leading-[1.85] text-balance">
                Marcus is a nurse in Columbus. He works 12-hour shifts and had a dinner to plan for his wife&apos;s birthday. He had 6 minutes between patients. He told Mora the neighborhood, the vibe, the budget. By the time he got home, it was booked.
              </p>
            </div>

            {/* Vertical rule */}
            <div
              className="hidden md:block w-px self-stretch bg-[#E5E7EB]"
              aria-hidden
            />

            {/* Pull quote */}
            <div className="relative p-10 flex flex-col justify-between">
              {/* Decorative quotation mark */}
              <div
                className="absolute top-6 left-8 text-[6rem] leading-none font-serif select-none pointer-events-none text-[#4F6EF7]/10"
                aria-hidden
              >
                &ldquo;
              </div>

              <blockquote className="relative z-10 mt-10">
                <p className="text-[1.15rem] font-medium text-[#111827] leading-relaxed text-balance italic">
                  I didn&apos;t even think about it. I just told it what I wanted and it was done.
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center border border-[#E5E7EB] bg-[#F3F4F6]"
                  aria-hidden
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-[#9CA3AF]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Marcus</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">Nurse, Columbus OH · Illustrative example</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-center text-[#6B7280] text-sm mt-10 max-w-md mx-auto leading-relaxed text-balance">
          That used to be a perk for someone else. Now it&apos;s yours.
        </p>

      </div>

    </section>
  );
}
