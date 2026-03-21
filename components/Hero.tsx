"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = hero.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      hero.style.setProperty("--mouse-x", `${x * 100}%`);
      hero.style.setProperty("--mouse-y", `${y * 100}%`);
    };

    hero.addEventListener("mousemove", onMouse);
    return () => hero.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Radial spotlight following mouse */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(200,255,0,0.08), transparent 60%)",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-volt/5 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-volt/4 rounded-full blur-[100px] pointer-events-none animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Top badge */}
      <div className="flex items-center gap-2 px-4 py-2 border border-volt/20 rounded-full bg-volt/5 mb-8 animate-fade-up">
        <Zap size={12} className="text-volt fill-volt" />
        <span className="font-mono text-xs text-volt tracking-wider uppercase">
          Digital Product Studio
        </span>
      </div>

      {/* Headline */}
      <div className="text-center max-w-5xl px-6">
        <h1
          className="font-display text-[clamp(3rem,10vw,9rem)] font-800 leading-[0.9] tracking-tight text-cream animate-fade-up stagger-1"
          style={{ animationFillMode: "both" }}
        >
          We Build
          <br />
          <span className="gradient-text">Digital</span>
          <br />
          Products
        </h1>

        <p
          className="mt-8 text-[clamp(1rem,2vw,1.25rem)] text-mist font-300 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-3"
          style={{ animationFillMode: "both" }}
        >
          From idea to scale — we design and engineer end-to-end digital
          experiences that make your users never want to leave.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-4"
          style={{ animationFillMode: "both" }}
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-volt text-ink font-display font-700 text-base rounded-sm hover:bg-cream transition-all duration-300 volt-glow"
          >
            Start a Project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 px-8 py-4 border border-white/10 text-cream font-display font-500 text-base rounded-sm hover:border-volt/40 hover:text-volt transition-all duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Stats Row */}
      <div
        className="absolute bottom-12 left-0 right-0 px-6 animate-fade-up stagger-5"
        style={{ animationFillMode: "both" }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {[
            { num: "5+", label: "Products Shipped" },
            { num: "3M", label: "In the Game" },
            { num: "100%", label: "Client Retention" },
            { num: "3x", label: "Avg. Growth" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-ink-2 px-6 py-4 text-center hover:bg-ink-3 transition-colors"
            >
              <div className="font-display text-2xl font-800 text-volt">
                {stat.num}
              </div>
              <div className="font-mono text-xs text-mist-2 mt-1 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[6rem] right-12 hidden lg:flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-mist rotate-90 tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-mist to-transparent" />
      </div>
    </section>
  );
}
