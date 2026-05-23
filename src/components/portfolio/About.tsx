import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title={<>Quant-grade ML. <span className="text-muted-foreground">Built for regulated finance.</span></>}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I lead the design of machine learning systems for banks, payment networks, and trading
            desks — the kind of work where a basis point of accuracy compounds into nine-figure P&L
            and a single false negative can become a regulatory event.
          </p>
          <p>
            My focus is end-to-end: from feature stores wired into core banking ledgers, to
            gradient-boosted credit models that survive SR 11-7 validation, to low-latency fraud
            scoring serving 10k TPS at sub-50ms p99. I work fluently with risk officers, regulators,
            engineering, and the C-suite.
          </p>
          <p className="text-foreground">
            Previously: Goldman Sachs (Quant Strategies), Stripe (Radar ML), and Revolut (Risk Decisioning).
          </p>
        </div>

        <aside
          className="rounded-xl border border-border p-6 font-mono text-sm space-y-4"
          style={{ background: "var(--gradient-card)" }}
        >
          {[
            ["LOCATION", "London / NYC"],
            ["AVAILABILITY", "Q2 2026"],
            ["MODE", "Advisory · Fractional"],
            ["FOCUS", "Risk · Fraud · Alpha"],
            ["CLEARANCE", "FCA approved (CF30)"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 pb-3 border-b border-border last:border-0 last:pb-0">
              <span className="text-muted-foreground uppercase tracking-wider text-xs">{k}</span>
              <span className="text-foreground">{v}</span>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  );
}