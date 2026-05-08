"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="orb absolute w-[500px] h-[300px] bg-indigo-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" aria-hidden />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-mora-text mb-5 leading-tight">
          Ready to remove
          <br />
          <span className="gradient-text">the delay?</span>
        </h2>
        <p className="text-mora-muted mb-10 text-balance">
          Join the waitlist for early access to Mora. We&apos;re onboarding developers and
          early users now.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-medium">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            You&apos;re on the list. We&apos;ll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-mora-surface border border-mora-border text-mora-text placeholder-mora-muted text-sm focus:outline-none focus:border-mora-primary transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-mora-primary hover:bg-indigo-500 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap"
            >
              Get early access
            </button>
          </form>
        )}

        <p className="text-xs text-mora-muted mt-4">No spam. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
