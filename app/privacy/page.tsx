export default function Privacy() {
  return (
    <main className="min-h-screen section-light px-6 py-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#111827] mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-[#6B7280] mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-[#6B7280] leading-relaxed text-[0.95rem]">
          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">1. Information we collect</h2>
            <p>When you join the Mora waitlist, we collect your email address. We do not collect payment information at the waitlist stage. Any payment credentials used through Mora are tokenized and processed by certified third-party payment processors — we do not store raw card or bank details on our servers.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">2. How we use your information</h2>
            <p>Your email address is used solely to notify you when your waitlist access is ready and to send product updates you have opted into. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">3. Data retention</h2>
            <p>We retain your email address until you request removal or unsubscribe. You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">4. Your rights</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data under laws such as CCPA (California), GDPR (EU/UK), and similar regulations. To exercise these rights, contact us at the address below.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">5. Contact</h2>
            <p>For privacy-related inquiries, email us at <a href="mailto:privacy@mora.ai" className="text-[#4F6EF7] hover:underline">privacy@mora.ai</a>.</p>
          </section>
        </div>

        <a href="/" className="inline-block mt-12 text-sm text-[#4F6EF7] hover:underline">← Back to home</a>
      </div>
    </main>
  );
}
