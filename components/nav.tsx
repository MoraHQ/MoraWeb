"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(201,208,228,0.50)]"
      style={{
        background: "rgba(211,217,233,0.70)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-[#4F6EF7] flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-tight">M</span>
          </div>
          <span className="font-semibold tracking-tight text-[15px] text-[#111827]">
            Mora
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "Product", href: "#product" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Developers", href: "#developers" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm transition-all duration-200 text-[#6B7280] hover:text-[#111827] hover:bg-gray-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#waitlist"
            className="relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 bg-[#F59E0B] text-[#111827] hover:bg-[#D97706] flex items-center gap-2"
          >
            Get early access
            <span className="text-[10px] font-bold uppercase tracking-wide bg-[#111827]/15 text-[#111827]/70 px-1.5 py-0.5 rounded-md">
              Soon
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all text-[#6B7280] hover:text-[#111827] hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[rgba(201,208,228,0.50)] px-6 py-5 space-y-1" style={{ background: "rgba(211,217,233,0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
          {[
            { label: "Product", href: "#product" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Developers", href: "#developers" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2 rounded-lg text-sm text-[#6B7280] hover:text-[#111827] hover:bg-gray-100 transition-all"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E7EB] mt-3">
            <a
              href="#waitlist"
              className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#F59E0B] text-[#111827] hover:bg-[#D97706] transition-colors"
              onClick={() => setOpen(false)}
            >
              Get early access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
