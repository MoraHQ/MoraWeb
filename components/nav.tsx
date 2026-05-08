"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-mora-border backdrop-blur-md bg-mora-bg/70">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-mora flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="font-semibold text-mora-text tracking-tight text-base">Mora</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Product", href: "#product" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Developers", href: "#developers" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-mora-muted hover:text-mora-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Mora-delay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-mora-muted hover:text-mora-text transition-colors"
          >
            GitHub
          </a>
          <a
            href="#waitlist"
            className="px-4 py-2 rounded-lg bg-mora-primary hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            Get early access
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-mora-muted hover:text-mora-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <div className="md:hidden border-t border-mora-border bg-mora-bg/95 px-6 py-4 space-y-4">
          {["Product", "How it works", "Developers"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(" ", "-")}`}
              className="block text-sm text-mora-muted hover:text-mora-text transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="block w-full text-center px-4 py-2 rounded-lg bg-mora-primary text-white text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Get early access
          </a>
        </div>
      )}
    </header>
  );
}
