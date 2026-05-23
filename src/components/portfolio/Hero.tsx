import { ArrowUpRight, TrendingUp, Activity } from "lucide-react";

export function Hero() {
  // Simple SVG sparkline path
  const points = [4, 12, 8, 18, 14, 22, 16, 28, 24, 30, 26, 38, 34, 42, 48, 46, 54, 60, 58, 68];
  const w = 600;
  const h = 160;
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - (p / max) * h * 0.9 - 8;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <section id="top" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
            <span className="text-muted-foreground">AVAILABLE FOR Q2 2026 ENGAGEMENTS</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
            Data science for the
            <br />
            <span className="text-gradient-emerald">money in motion.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm <span className="text-foreground font-medium">Alex Mercer</span>, a senior data
            scientist building risk, fraud, and alpha-generating systems for global banks and
            FinTech leaders. 9 years shipping models that move billions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-emerald"
            >
              View case studies <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-card/40 backdrop-blur text-foreground font-medium hover:bg-card transition"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg font-mono">
            {[
              { k: "$2.4B+", v: "Assets modeled" },
              { k: "47 bps", v: "Avg. alpha lift" },
              { k: "9 yrs", v: "Quant + ML" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-2xl font-semibold text-foreground">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Dashboard card */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div
            className="rounded-xl border border-border p-5 backdrop-blur-xl"
            style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Portfolio Risk Engine · LIVE
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--terminal-amber)" }}
                />
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--terminal-red)" }}
                />
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-mono text-3xl text-foreground">+12.84%</span>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-mono">
                <TrendingUp className="w-3 h-3" /> YTD
              </span>
            </div>
            <div className="font-mono text-xs text-muted-foreground mt-1">
              Sharpe 2.41 · Max DD -3.2% · VaR(95) 1.8%
            </div>

            <svg viewBox={`0 0 ${w} ${h}`} className="w-full mt-4">
              <defs>
                <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.17 158)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="oklch(0.72 0.17 158)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#spark)" />
              <path
                d={path}
                fill="none"
                stroke="oklch(0.78 0.18 158)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border font-mono text-xs">
              {[
                { l: "Fraud Recall", v: "97.4%" },
                { l: "Latency p99", v: "38ms" },
                { l: "Models Live", v: "23" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="text-muted-foreground uppercase tracking-wider text-[10px]">
                    {m.l}
                  </div>
                  <div className="text-foreground text-base mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}