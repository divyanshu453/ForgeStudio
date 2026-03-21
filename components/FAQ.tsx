"use client";
import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most end-to-end product builds take 12–16 weeks. Landing pages are 2–3 weeks. SaaS platforms with complex features can run 20+ weeks. We scope honestly and pad for the unexpected.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — some of our best work has been with pre-seed and seed-stage companies who need to move fast and get it right the first time. We're comfortable with ambiguity and first-principles thinking.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We embed into your workflow — your tools, your standups, your Slack. Think of us as a senior extension of your team, not a black-box agency.",
  },
  {
    q: "What's the minimum engagement size?",
    a: "We don't work well for projects under $10K — there's not enough room to do great work. Our sweet spot is $25K–$150K engagements where we can truly deliver.",
  },
  {
    q: "Do you do ongoing support after launch?",
    a: "Yes. We offer retainer arrangements for ongoing development, design iterations, and platform maintenance. Many clients stay with us for years after the initial build.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do. Full stop. Upon final payment, all IP transfers to you. We'll also set up your own repos, cloud accounts, and design files so you're never dependent on us.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="font-mono text-xs text-volt tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-800 text-cream mt-3 leading-none tracking-tight">
            Questions we get asked
          </h2>
        </div>

        <div className="space-y-px border border-white/5 rounded-sm overflow-hidden">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-ink-2 hover:bg-ink-3 transition-colors duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
              >
                <span className="font-display font-600 text-cream text-base md:text-lg">
                  {faq.q}
                </span>
                <div className="shrink-0 w-6 h-6 rounded-sm bg-white/5 flex items-center justify-center">
                  {open === i ? (
                    <Minus size={12} className="text-volt" />
                  ) : (
                    <Plus size={12} className="text-mist" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-8 pb-6 text-mist font-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
