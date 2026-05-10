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
    <section
      id="waitlist"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(79,110,247,0.18) 0%, transparent 70%), #080D1A",
      }}
    >
      {/* Top fade — body white to dark */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0"
        style={{ background: "linear-gradient(to top, transparent 0%, #EAEEf9 100%)" }}
        aria-hidden
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="badge mb-8 mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse-slow flex-shrink-0" />
          Coming soon
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.05]">
          Complete the loop.
          <br />
          <span className="text-[#F59E0B]">Be first in line.</span>
        </h2>

        <p className="text-white/60 mb-12 text-balance text-[1.05rem] leading-relaxed">
          Mora is launching soon. Drop your email and we&apos;ll reach out the moment access opens.
        </p>

        {/* Coming soon card */}
        <div
          className="rounded-2xl px-8 py-8 mb-8 max-w-md mx-auto"
          style={{
            background: "rgba(14,20,40,0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(79,110,247,0.20)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-[#F59E0B]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">How to get Mora</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6 text-balance">
            Early access is invite-only. Join the waitlist and you&apos;ll be notified when your spot is ready.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-medium text-sm w-full justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              You&apos;re on the list. We&apos;ll reach out soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4F6EF7]/60 focus:ring-1 focus:ring-[#4F6EF7]/25 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-xl bg-[#F59E0B] text-[#111827] font-semibold text-sm hover:bg-[#D97706] transition-colors duration-200"
              >
                Notify me when it&apos;s ready
              </button>
            </form>
          )}
        </div>

        <p className="text-xs text-white/30">
          No spam. We&apos;ll reach out when your access is ready.
        </p>

        {/* Social proof row */}
        <div className="mt-14 flex items-center justify-center gap-2 text-xs text-white/40">
          <div className="flex -space-x-2">
            {["bg-[#4F6EF7]", "bg-indigo-500", "bg-violet-500", "bg-[#F59E0B]"].map((color, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full ${color} border-2 border-[#080D1A] flex items-center justify-center text-[9px] text-white font-bold`}
              >
                {["J", "A", "M", "K"][i]}
              </div>
            ))}
          </div>
          <span>Developers building with Mora</span>
        </div>
      </div>
    </section>
  );
}
