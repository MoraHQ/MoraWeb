export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-10 px-6 overflow-hidden bg-[#080D1A]">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-12 mb-14">
          {/* Logo + tagline */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-[#4F6EF7] flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-white text-base">Mora</span>
            </div>
            <p className="text-sm text-white/45 max-w-[200px] leading-relaxed">
              AI that completes the loop.
            </p>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-3">
            {[
              {
                group: "Product",
                links: [
                  { label: "How it works", href: "#how-it-works" },
                  { label: "Products", href: "#product" },
                ],
              },
              {
                group: "Developers",
                links: [
                  { label: "Docs", href: "#" },
                  { label: "API", href: "#" },
                ],
              },
              {
                group: "Company",
                links: [
                  { label: "Waitlist", href: "#waitlist" },
                  { label: "Contact", href: "#" },
                ],
              },
            ].map((col) => (
              <div key={col.group}>
                <p className="text-xs font-semibold text-white/60 uppercase tracking-[0.1em] mb-4">
                  {col.group}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-white/40 hover:text-white/70 transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {year} Mora. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
