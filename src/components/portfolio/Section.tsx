import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              {eyebrow}
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h2>
            {description && (
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}