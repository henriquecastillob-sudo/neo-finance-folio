import { Section } from "./Section";
import { Brain, Database, LineChart, ShieldCheck, Cpu, Network } from "lucide-react";

const groups = [
  {
    icon: Brain,
    title: "Machine Learning",
    items: ["XGBoost / LightGBM", "PyTorch", "Bayesian inference", "Causal inference", "MLOps · Vertex / SageMaker"],
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    items: ["IFRS 9 / CECL", "SR 11-7 validation", "PD · LGD · EAD", "AML / KYC modeling", "Stress testing"],
  },
  {
    icon: LineChart,
    title: "Quantitative Finance",
    items: ["Factor models", "Stochastic calc", "VaR / Expected Shortfall", "Portfolio optimization", "Backtesting"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    items: ["Snowflake · BigQuery", "dbt · Airflow", "Kafka streaming", "Feast feature store", "Spark"],
  },
  {
    icon: Cpu,
    title: "Languages",
    items: ["Python · NumPy · Pandas", "SQL (advanced)", "Scala", "Rust (services)", "kdb+ / q"],
  },
  {
    icon: Network,
    title: "Infra & Deploy",
    items: ["Kubernetes", "Terraform", "FastAPI · gRPC", "Triton inference", "Observability (Datadog)"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Capabilities"
      title={<>A full stack tuned for <span className="text-gradient-emerald">financial-grade systems.</span></>}
      description="From research notebook to a model serving regulated traffic, with the audit trail to prove it."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-md border border-border flex items-center justify-center bg-background/40 group-hover:border-primary/60 transition">
                <g.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/70" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}