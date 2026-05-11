export default function Terms() {
  return (
    <main className="min-h-screen section-light px-6 py-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#111827] mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-[#6B7280] mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-[#6B7280] leading-relaxed text-[0.95rem]">
          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">1. Beta service</h2>
            <p>Mora is currently in private beta. Features described on this website are in active development and subject to change. Access is invite-only and availability varies. Some features, including crypto payment support, are subject to regulatory review and may not be available in your jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">2. No guarantees of availability</h2>
            <p>Mora does not guarantee compatibility with all merchants or platforms. Transaction speed and success rates depend on merchant infrastructure, network conditions, and other factors outside our control. Performance figures on this site reflect typical conditions and are not guaranteed outcomes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">3. User responsibility</h2>
            <p>You are responsible for reviewing all transactions before they are submitted. Mora will prompt for confirmation before completing any purchase. You agree to use the service only for lawful purposes and within applicable spending limits you configure.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">4. Limitation of liability</h2>
            <p>To the fullest extent permitted by law, Mora is not liable for failed transactions, merchant errors, or losses arising from use of the service. During the beta period, the service is provided as-is without warranty.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">5. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:legal@mora.ai" className="text-[#4F6EF7] hover:underline">legal@mora.ai</a>.</p>
          </section>
        </div>

        <a href="/" className="inline-block mt-12 text-sm text-[#4F6EF7] hover:underline">← Back to home</a>
      </div>
    </main>
  );
}
