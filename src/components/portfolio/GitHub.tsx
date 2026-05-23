import { Section } from "./Section";
import { Github, GitBranch, Star, GitCommit } from "lucide-react";

const repos = [
  { name: "alpha-factor-lab", desc: "Research framework for cross-sectional equity factors with walk-forward backtesting.", lang: "Python", stars: "1.4k", forks: 142 },
  { name: "creditrisk-toolkit", desc: "Calibration, monotonicity, and PSI utilities for IFRS 9 / CECL credit models.", lang: "Python", stars: "812", forks: 96 },
  { name: "fraud-stream", desc: "Low-latency feature store + XGBoost serving template (Rust + FastAPI).", lang: "Rust", stars: "604", forks: 51 },
  { name: "kdb-quant-recipes", desc: "Production patterns for q/kdb+ tick data analytics on the buy side.", lang: "q", stars: "318", forks: 27 },
];

const contribGrid = Array.from({ length: 7 * 24 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const v = seed / 233280;
  return v < 0.45 ? 0 : v < 0.7 ? 1 : v < 0.88 ? 2 : v < 0.97 ? 3 : 4;
});
const levelColor = [
  "oklch(0.24 0.035 250)",
  "oklch(0.42 0.09 158)",
  "oklch(0.55 0.13 158)",
  "oklch(0.68 0.16 158)",
  "oklch(0.82 0.19 158)",
];

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="04 / Open Source"
      title={<>Code in <span className="text-gradient-emerald">production.</span></>}
      description="A snapshot of public work. Most client systems live behind firewalls — these are the parts I can share."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1 rounded-xl border border-border p-6" style={{ background: "var(--gradient-card)" }}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-background/40">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold">@alex-mercer</div>
              <a href="https://github.com" className="font-mono text-xs text-primary hover:underline">
                github.com/alex-mercer
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6 font-mono">
            {[
              { i: GitCommit, l: "Commits/yr", v: "1,284" },
              { i: Star, l: "Stars", v: "4.2k" },
              { i: GitBranch, l: "Repos", v: "37" },
            ].map((s) => (
              <div key={s.l} className="rounded-md border border-border p-3 bg-background/30">
                <s.i className="w-3.5 h-3.5 text-primary mb-1.5" />
                <div className="text-foreground text-lg">{s.v}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
              Contributions · last 24 weeks
            </div>
            <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(24, 1fr)" }}>
              {contribGrid.map((lvl, i) => (
                <div key={i} className="aspect-square rounded-[2px]" style={{ background: levelColor[lvl] }} />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3 font-mono text-[10px] text-muted-foreground">
              Less
              {levelColor.map((c, i) => (
                <span key={i} className="w-2.5 h-2.5 rounded-[2px]" style={{ background: c }} />
              ))}
              More
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {repos.map((r) => (
            <a
              key={r.name}
              href="https://github.com"
              className="group rounded-xl border border-border p-5 transition-all hover:border-primary/50 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Github className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-sm text-primary group-hover:underline">{r.name}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              <div className="flex items-center gap-4 mt-4 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> {r.lang}</span>
                <span className="flex items-center gap-1.5"><Star className="w-3 h-3" /> {r.stars}</span>
                <span className="flex items-center gap-1.5"><GitBranch className="w-3 h-3" /> {r.forks}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}