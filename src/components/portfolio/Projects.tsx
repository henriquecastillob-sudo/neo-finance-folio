import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "FRAUD · REAL-TIME",
    title: "Sub-50ms transaction risk scoring at 10k TPS",
    client: "Tier-1 payment network",
    desc: "Designed a streaming feature pipeline and gradient-boosted ensemble that reduced false positives by 38% while lifting fraud recall to 97.4%.",
    metrics: [["Recall", "97.4%"], ["FP reduction", "-38%"], ["p99 latency", "38ms"]],
  },
  {
    tag: "CREDIT · IFRS 9",
    title: "PD/LGD models for a $2.4B unsecured book",
    client: "European challenger bank",
    desc: "Replaced logistic scorecards with calibrated XGBoost PD models. Passed SR 11-7 validation; reduced expected credit loss provisions by 12% YoY.",
    metrics: [["AUC", "0.91"], ["ECL impact", "-12%"], ["Models", "7"]],
  },
  {
    tag: "ALPHA · EQUITIES",
    title: "Cross-sectional alpha factor from alternative data",
    client: "Quant hedge fund",
    desc: "Engineered an NLP-driven sentiment factor over 8 years of earnings transcripts. Delivered uncorrelated 47 bps monthly alpha at a 2.4 Sharpe.",
    metrics: [["Sharpe", "2.41"], ["Alpha", "+47 bps"], ["IR", "1.82"]],
  },
  {
    tag: "AML · GRAPH ML",
    title: "Money-laundering ring detection via GNNs",
    client: "Crypto exchange",
    desc: "Graph neural network surfacing layered transaction structures across 180M wallets. Cut investigator review time 4x; surfaced 3 sanctioned clusters.",
    metrics: [["Wallets", "180M"], ["Triage", "4x faster"], ["Precision@50", "0.88"]],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Featured Work"
      title={<>Case studies <span className="text-muted-foreground">that moved P&L.</span></>}
      description="Selected engagements. Names redacted under NDA — happy to walk through specifics on a call."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-xl border border-border p-7 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary px-2 py-1 rounded border border-primary/30 bg-primary/5">
                {p.tag}
              </span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </div>
            <h3 className="text-2xl font-semibold leading-tight">{p.title}</h3>
            <div className="font-mono text-xs text-muted-foreground mt-2">{p.client}</div>
            <p className="text-muted-foreground mt-4 leading-relaxed">{p.desc}</p>
            <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-border font-mono">
              {p.metrics.map(([l, v]) => (
                <div key={l}>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
                  <div className="text-lg text-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}