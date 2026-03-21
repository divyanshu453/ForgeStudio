"use client";
import { useEffect, useRef } from "react";

const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Go",
  "PostgreSQL", "Redis", "AWS", "Vercel", "Figma", "Framer",
  "Stripe", "Supabase", "Prisma", "Tailwind",
];

const values = [
  {
    title: "Brutally Honest",
    desc: "We tell you if your idea needs pivoting, your timeline is unrealistic, or your budget won't get you what you want. No sugar-coating.",
  },
  {
    title: "Speed Without Sacrifice",
    desc: "Fast delivery doesn't mean cutting corners. We've perfected our toolchain and process to ship quality faster than others ship anything.",
  },
  {
    title: "Ownership Mentality",
    desc: "We treat every product like we're co-founders. That means proactively solving problems you didn't know you had.",
  },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-ink-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <span className="font-mono text-xs text-volt tracking-widest uppercase animate-on-scroll">
              Who We Are
            </span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-800 text-cream mt-3 leading-none tracking-tight animate-on-scroll">
              A tight team of
              <br />
              <span className="text-gradient-volt">product obsessives</span>
            </h2>

            <p className="mt-8 text-mist font-300 text-base leading-relaxed animate-on-scroll">
              Forge Studio is a boutique digital product agency. We&apos;re a team of
              designers, engineers, and strategists who&apos;ve shipped products at
              companies like Google, Stripe, and top-tier startups.
            </p>
            <p className="mt-4 text-mist font-300 text-base leading-relaxed animate-on-scroll">
              We work with ambitious founders and forward-thinking companies who
              care deeply about what they build. Quality isn&apos;t a feature for us —
              it&apos;s the baseline.
            </p>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="animate-on-scroll border-l-2 border-volt/30 pl-6 hover:border-volt transition-colors duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h4 className="font-display font-700 text-cream text-lg">{v.title}</h4>
                  <p className="text-mist text-sm font-300 mt-1 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* Team visual placeholder */}
            <div className="animate-on-scroll relative bg-ink-3 border border-white/5 rounded-sm overflow-hidden h-64 flex items-center justify-center">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative text-center">
                <div className="font-display text-7xl font-800 text-volt/20">FS</div>
                <div className="font-mono text-xs text-mist-2 mt-2 tracking-widest">EST. 2019</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-volt/10 rounded-full animate-spin-slow" />
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-volt/10 rounded-sm animate-float" />
            </div>

            {/* Tech Stack */}
            <div className="animate-on-scroll bg-ink border border-white/5 rounded-sm p-6">
              <div className="font-mono text-xs text-mist-2 tracking-widest mb-4 uppercase">
                Our Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 bg-white/5 hover:bg-volt/10 hover:text-volt text-mist rounded-sm font-mono transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="animate-on-scroll grid grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
              {[
                { label: "Team Size", value: "12 people" },
                { label: "Time Zones", value: "3 regions" },
                { label: "Avg. Project", value: "14 weeks" },
                { label: "Industries", value: "8+ sectors" },
              ].map((fact) => (
                <div key={fact.label} className="bg-ink-2 p-5">
                  <div className="font-display text-xl font-700 text-volt">{fact.value}</div>
                  <div className="font-mono text-xs text-mist-2 mt-1">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
