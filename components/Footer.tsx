const footerLinks = {
  Services: [
    "End-to-End Products",
    "UI / UX Design",
    "Landing Pages",
    "SaaS Platforms",
    "Scalable Platforms",
    "Consulting",
  ],
  Company: ["About", "Work", "Process", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-volt rounded-sm flex items-center justify-center">
                <span className="text-ink font-display font-800 text-sm">F</span>
              </div>
              <span className="font-display font-700 text-cream text-lg tracking-tight">
                Forge<span className="text-volt">Studio</span>
              </span>
            </div>
            <p className="text-mist font-300 text-sm leading-relaxed max-w-xs">
              A digital product studio building the next generation of web
              products. Remote-first, globally distributed.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-volt rounded-full animate-pulse" />
              <span className="font-mono text-xs text-volt">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="font-mono text-xs text-mist-2 tracking-widest uppercase mb-4">
                {category}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-mist hover:text-cream transition-colors font-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-mist-2">
            © {new Date().getFullYear()} Forge Studio. All rights reserved.
          </div>
          {/* <div className="font-mono text-xs text-mist-2">
            Built with{" "}
            <span className="text-volt">Next.js + Tailwind</span> · Deployed on{" "}
            <span className="text-volt">Vercel</span>
          </div> */}
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-mono text-xs text-mist-2 hover:text-volt transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
