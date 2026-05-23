const tickerItems = [
  { sym: "S&P 500", val: "5,832.41", chg: "+0.42%" },
  { sym: "NDX", val: "20,114.23", chg: "+0.81%" },
  { sym: "BTC", val: "97,420", chg: "+2.14%" },
  { sym: "ETH", val: "3,412", chg: "-0.62%" },
  { sym: "USD/EUR", val: "1.0843", chg: "+0.11%" },
  { sym: "GS", val: "612.55", chg: "+1.02%" },
  { sym: "JPM", val: "248.91", chg: "+0.34%" },
  { sym: "VIX", val: "14.23", chg: "-3.10%" },
  { sym: "GOLD", val: "2,684", chg: "+0.18%" },
  { sym: "OIL", val: "71.42", chg: "-0.84%" },
];

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="border-y border-border bg-card/40 overflow-hidden font-mono text-xs">
      <div className="flex ticker whitespace-nowrap py-2.5">
        {items.map((it, i) => {
          const up = it.chg.startsWith("+");
          return (
            <div key={i} className="flex items-center gap-3 px-6 shrink-0">
              <span className="text-muted-foreground">{it.sym}</span>
              <span className="text-foreground">{it.val}</span>
              <span style={{ color: up ? "var(--primary)" : "var(--terminal-red)" }}>
                {it.chg}
              </span>
              <span className="text-border">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}