"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-volt rounded-sm flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <span className="text-ink font-display font-800 text-sm">F</span>
            </div>
            <span className="font-display font-700 text-cream text-lg tracking-tight">
              Forge<span className="text-volt">Studio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-mist hover:text-cream transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-volt group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-volt text-ink font-display font-600 text-sm rounded-sm hover:bg-volt-dim transition-colors duration-200 volt-glow"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cream"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-700 text-cream hover:text-volt transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-3 bg-volt text-ink font-display font-700 text-lg rounded-sm"
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
