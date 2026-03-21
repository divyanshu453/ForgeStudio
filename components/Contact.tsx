"use client";
import { useEffect, useRef, useState } from "react";
import { Send, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

const budgetOptions = ["< $5K", "$5K – $10K", "$10K – $50K", "$50K – $75K", "$75k+"];
const serviceOptions = ["End-to-End Product", "UI / UX Design", "Landing Page", "SaaS Platform", "Scalable Platform", "Technical Consulting"];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Something went wrong. Please try again."); return; }
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-ink border border-white/10 rounded-sm px-4 py-3 text-cream font-body text-sm placeholder:text-mist-2 focus:outline-none focus:border-volt/50 focus:bg-ink-3 transition-all duration-200";

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 bg-ink-2">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <span className="font-mono text-xs text-volt tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-800 text-cream mt-3 leading-none tracking-tight">
            Let&apos;s build something<br /><span className="text-gradient-volt">remarkable</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-8 animate-on-scroll">
            <p className="text-mist font-300 text-base leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours with an honest assessment and rough scope.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@forgestudio.co" className="flex items-center gap-3 text-mist hover:text-volt transition-colors group">
                <div className="w-8 h-8 bg-volt/10 rounded-sm flex items-center justify-center group-hover:bg-volt/20 transition-colors">
                  <Mail size={14} className="text-volt" />
                </div>
                <span className="font-mono text-sm">divyanshuprajapati100@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-mist">
                <div className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center"><MapPin size={14} className="text-mist-2" /></div>
                <span className="font-mono text-sm">Remote-first · Global</span>
              </div>
              <div className="flex items-center gap-3 text-mist">
                <div className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center"><Clock size={14} className="text-mist-2" /></div>
                <span className="font-mono text-sm">Response within 24h</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-volt/20 bg-volt/5 rounded-sm">
              <span className="w-2 h-2 bg-volt rounded-full animate-pulse" />
              <span className="font-mono text-xs text-volt">Taking projects for Q2 2025</span>
            </div>
            <div className="pt-8 border-t border-white/5">
              <div className="font-mono text-xs text-mist-2 tracking-wider mb-4 uppercase">Find us online</div>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "Dribbble", "GitHub"].map((s) => (
                  <a key={s} href="#" className="font-mono text-xs text-mist hover:text-volt transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3 animate-on-scroll">
            {submitted ? (
              <div className="h-full border border-volt/20 bg-volt/5 rounded-sm flex flex-col items-center justify-center py-20 text-center px-8">
                <div className="w-16 h-16 bg-volt rounded-sm flex items-center justify-center mb-6 text-ink text-2xl font-bold">✓</div>
                <h3 className="font-display text-2xl font-700 text-cream mb-2">Message received!</h3>
                <p className="text-mist font-300 text-sm">We&apos;ll be in touch within 24 hours. Check your inbox — we just sent you a confirmation email too.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-white/5 bg-ink rounded-sm p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-mist-2 tracking-wider mb-2 block">YOUR NAME *</label>
                    <input type="text" required placeholder="Alex Johnson" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-mist-2 tracking-wider mb-2 block">EMAIL *</label>
                    <input type="email" required placeholder="alex@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-mist-2 tracking-wider mb-2 block">COMPANY / PROJECT</label>
                  <input type="text" placeholder="Acme Inc." value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <label className="font-mono text-xs text-mist-2 tracking-wider mb-2 block">SERVICE NEEDED *</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <button key={s} type="button" onClick={() => setForm({ ...form, service: s })}
                        className={`text-xs px-3 py-2 rounded-sm font-mono transition-all duration-200 ${form.service === s ? "bg-volt text-ink" : "bg-white/5 text-mist hover:bg-white/10"}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-mist-2 tracking-wider mb-2 block">BUDGET RANGE</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((b) => (
                      <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })}
                        className={`text-xs px-3 py-2 rounded-sm font-mono transition-all duration-200 ${form.budget === b ? "bg-volt text-ink" : "bg-white/5 text-mist hover:bg-white/10"}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-mist-2 tracking-wider mb-2 block">PROJECT BRIEF *</label>
                  <textarea required rows={4} placeholder="Tell us about your project, goals, and timeline..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                </div>

                {error && (
                  <div className="flex items-start gap-3 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-sm">
                    <AlertCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                    <p className="text-red-400 text-xs font-mono">{error}</p>
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-volt text-ink font-display font-700 text-base rounded-sm hover:bg-cream transition-all duration-300 volt-glow disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Send size={16} />Send Project Brief</>
                  )}
                </button>
                <p className="text-xs text-mist-2 font-mono text-center">No spam. No sales calls. Just a real conversation.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
