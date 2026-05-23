import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { name: "CFA Charterholder", org: "CFA Institute", year: "2021", id: "CFA-2021-08841" },
  { name: "FRM — Financial Risk Manager", org: "GARP", year: "2020", id: "FRM-2020-12305" },
  { name: "AWS Machine Learning — Specialty", org: "Amazon Web Services", year: "2023", id: "AWS-MLS-C01" },
  { name: "Google Cloud Professional ML Engineer", org: "Google Cloud", year: "2023", id: "GCP-PMLE-7714" },
  { name: "Databricks Certified ML Professional", org: "Databricks", year: "2024", id: "DB-MLP-2024" },
  { name: "MIT Professional — Algorithmic Trading", org: "MIT Sloan", year: "2019", id: "MIT-AT-019" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 / Credentials"
      title={<>Certified across <span className="text-gradient-emerald">finance & ML.</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border border-border p-6 transition hover:border-primary/40"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex items-start justify-between gap-3">
              <Award className="w-5 h-5 text-primary mt-1" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">{c.year}</span>
            </div>
            <h3 className="mt-4 font-semibold text-lg leading-tight">{c.name}</h3>
            <div className="text-sm text-muted-foreground mt-1">{c.org}</div>
            <div className="font-mono text-[10px] text-muted-foreground/70 mt-4 pt-4 border-t border-border tracking-wider">
              ID · {c.id}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}