"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-volt relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative blob */}
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-ink/10 rounded-full blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-ink/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-800 text-ink leading-none tracking-tight">
            Ready to
            <br />
            ship?
          </h2>
          <p className="mt-6 text-ink/60 font-300 text-lg max-w-lg mx-auto">
            Stop waiting. Your competition isn&apos;t. Let&apos;s get your product in front of users.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-10 py-4 bg-ink text-volt font-display font-700 text-lg rounded-sm hover:bg-ink-3 transition-all duration-300"
            >
              Start Now
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="mailto:divyanshuprajapati100@gmail.com"
              className="font-mono text-sm text-ink/60 hover:text-ink transition-colors"
            >
              divyanshuprajapati100@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
