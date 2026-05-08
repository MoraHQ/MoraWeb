const codeSnippet = `// Use Mora as an MCP tool from any AI model
const result = await mora.tools.execute({
  tool: "mora_execute_purchase",
  input: {
    intent: "Book a table at Nobu for 4 at 7pm tonight",
    userId: "usr_abc123",
  },
});

// result.confirmation
// → { id: "res_xyz", status: "confirmed",
//     restaurant: "Nobu Tribeca",
//     date: "2025-05-08", time: "19:00",
//     party: 4, ref: "OT-9382711" }`;

export default function Developers() {
  return (
    <section id="developers" className="py-28 px-6 relative overflow-hidden">
      <div
        className="orb absolute w-[350px] h-[350px] bg-indigo-700 bottom-0 right-0 opacity-10"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest text-mora-primary font-medium mb-3">
              Developer ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-mora-text mb-5">
              The payment layer for
              <br />
              <span className="gradient-text">any AI application.</span>
            </h2>
            <p className="text-mora-muted leading-relaxed mb-8">
              Mora exposes its capabilities as MCP tools — any model that supports tool use
              can execute purchases through Mora without building its own checkout infrastructure.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "MCP Tools",
                  desc: "Claude, GPT-4, Gemini — any model with tool use can call Mora natively.",
                },
                {
                  title: "MoraProtocol API",
                  desc: "HTTP API for third-party agents. Submit an intent, get a confirmed transaction back.",
                },
                {
                  title: "Merchant Connector SDK",
                  desc: "Open-source framework for merchants to publish first-class API connectors, skipping browser automation entirely.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 rounded-full bg-gradient-mora shrink-0 self-stretch" />
                  <div>
                    <h4 className="text-sm font-semibold text-mora-text mb-1">{item.title}</h4>
                    <p className="text-sm text-mora-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — code block */}
          <div className="code-block p-6 overflow-x-auto">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-mora-muted">mora-example.ts</span>
            </div>
            <pre className="text-xs leading-relaxed">
              <code>
                {codeSnippet.split("\n").map((line, i) => {
                  // Basic syntax highlighting
                  const highlighted = line
                    .replace(/(\/\/.*)/g, '<span class="text-mora-muted">$1</span>')
                    .replace(/\b(const|await|return)\b/g, '<span class="text-violet-400">$1</span>')
                    .replace(/(".*?")/g, '<span class="text-emerald-400">$1</span>')
                    .replace(/\b(mora|result|tools)\b/g, '<span class="text-indigo-300">$1</span>');
                  return (
                    <span
                      key={i}
                      className="block text-mora-text/80"
                      dangerouslySetInnerHTML={{ __html: highlighted }}
                    />
                  );
                })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
