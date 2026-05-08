export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mora-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-gradient-mora flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="font-semibold text-mora-text text-sm">Mora</span>
            </div>
            <p className="text-xs text-mora-muted">Remove the delay.</p>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3">
            {[
              { group: "Product", links: [{ label: "How it works", href: "#how-it-works" }, { label: "Pillars", href: "#product" }] },
              { group: "Developers", links: [{ label: "GitHub", href: "https://github.com/Mora-delay" }, { label: "Docs", href: "#" }] },
              { group: "Company", links: [{ label: "Waitlist", href: "#waitlist" }, { label: "Contact", href: "#" }] },
            ].map((col) => (
              <div key={col.group}>
                <p className="text-xs font-medium text-mora-text mb-2">{col.group}</p>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-xs text-mora-muted hover:text-mora-text transition-colors py-0.5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-mora-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mora-muted">
            © {year} Mora. All rights reserved.
          </p>
          <p className="text-xs text-mora-muted">
            Built on{" "}
            <span className="text-mora-primary">MPP</span>
            {" · "}
            <span className="text-mora-primary">Tempo Mainnet</span>
            {" · "}
            <span className="text-mora-primary">Stripe</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
