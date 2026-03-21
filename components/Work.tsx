"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "NovaPay",
    category: "SaaS Platform",
    description:
      "A B2B payments infrastructure platform. Built full-stack: multi-tenant auth, real-time transaction dashboards, and webhook management.",
    tech: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    color: "#C8FF00",
    year: "2024",
    stat: "2M+ txns/mo",
  },
  {
    id: "02",
    title: "Arclight",
    category: "End-to-End Product",
    description:
      "AI-powered creative brief generator for marketing teams. From zero to launch in 12 weeks including design system and mobile app.",
    tech: ["React Native", "FastAPI", "OpenAI", "AWS"],
    color: "#7C6DFA",
    year: "2024",
    stat: "40K users",
  },
  {
    id: "03",
    title: "Meridian",
    category: "Scalable Platform",
    description:
      "Real-time analytics platform for e-commerce brands. Handles 50M+ events/day with sub-200ms query response time.",
    tech: ["ClickHouse", "Kafka", "Go", "React"],
    color: "#FF6B35",
    year: "2023",
    stat: "50M events/day",
  },
  {
    id: "04",
    title: "Bloom Health",
    category: "UI / UX Design",
    description:
      "Complete redesign of a telemedicine platform. Reduced patient drop-off by 60% and increased provider efficiency.",
    tech: ["Figma", "Design System", "Prototyping", "Research"],
    color: "#00D9FF",
    year: "2023",
    stat: "-60% drop-off",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current
      ?.querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 px-6 bg-ink-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 animate-on-scroll">
          <div>
            <span className="font-mono text-xs text-volt tracking-widest uppercase">
              Selected Work
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-800 text-cream mt-3 leading-none tracking-tight">
              Products we&apos;ve
              <br />
              <span className="text-gradient-volt">shipped</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-mist hover:text-volt transition-colors font-mono tracking-wider flex items-center gap-2 self-end"
          >
            All case studies →
          </a>
        </div>

        {/* Projects */}
        <div className="space-y-px">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="animate-on-scroll group border border-white/5 bg-ink hover:bg-ink-3 transition-all duration-500 rounded-sm overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs text-mist-2 tracking-widest">
                        {project.id}
                      </span>
                      <span
                        className="text-xs px-3 py-1 rounded-full font-mono tracking-wider"
                        style={{
                          background: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-mist-2 ml-auto">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl font-800 text-cream mb-3 group-hover:text-volt transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-mist font-300 text-sm leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col gap-6 lg:items-end">
                    {/* Stat */}
                    <div className="text-right">
                      <div
                        className="font-display text-3xl font-800"
                        style={{ color: project.color }}
                      >
                        {project.stat}
                      </div>
                      <div className="font-mono text-xs text-mist-2 mt-1">
                        Key Metric
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 bg-white/5 text-mist rounded-sm font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="flex items-center gap-2 text-xs font-mono text-mist hover:text-volt transition-colors group/btn">
                      <span>View Case Study</span>
                      <ExternalLink
                        size={12}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div
                className="h-px transition-all duration-700"
                style={{
                  background:
                    activeProject === project.id ? project.color : "transparent",
                  opacity: activeProject === project.id ? 0.6 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
