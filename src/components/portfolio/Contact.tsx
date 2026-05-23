import { Mail, Linkedin, Github, Calendar } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">06 / Contact</div>
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Let's talk about your <span className="text-gradient-emerald">next model.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Open to advisory roles, fractional CDS engagements, and selected long-form builds for banks, fintechs, and trading firms.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a href="mailto:alex@mercer.fi" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-emerald">
            <Mail className="w-4 h-4" /> alex@mercer.fi
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border bg-card/50 backdrop-blur hover:bg-card transition">
            <Calendar className="w-4 h-4" /> Book a 30-min intro
          </a>
        </div>
        <div className="mt-16 flex justify-center gap-6 font-mono text-xs text-muted-foreground">
          <a href="#" className="inline-flex items-center gap-2 hover:text-foreground transition">
            <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/alexmercer
          </a>
          <a href="#" className="inline-flex items-center gap-2 hover:text-foreground transition">
            <Github className="w-3.5 h-3.5" /> github.com/alex-mercer
          </a>
        </div>
      </div>
      <footer className="relative mt-24 pt-6 border-t border-border max-w-7xl mx-auto px-6 flex items-center justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
        <span>© 2026 Alex Mercer · All rights reserved</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" /> Markets open · NYSE
        </span>
      </footer>
    </section>
  );
}