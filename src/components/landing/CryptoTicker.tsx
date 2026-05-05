const items = [
  { s: "BTC", p: "$64,230.50", c: 1.2 },
  { s: "ETH", p: "$3,450.20", c: 0.8 },
  { s: "SOL", p: "$198.40", c: 3.4 },
  { s: "USDT", p: "$1.00", c: 0 },
  { s: "BNB", p: "$720.10", c: -0.3 },
  { s: "XRP", p: "$0.65", c: 1.5 },
  { s: "ADA", p: "$0.45", c: 2.1 },
];

function Item({ s, p, c }: { s: string; p: string; c: number }) {
  const color = c > 0 ? "text-success" : c < 0 ? "text-danger" : "text-white/70";
  const sym = c > 0 ? "▲" : c < 0 ? "▼" : "◆";
  return (
    <span className="mx-8 inline-flex items-center gap-2 font-mono text-[13px] text-white">
      <span className="font-semibold">{s}</span>
      <span>{p}</span>
      <span className={color}>
        {sym} {Math.abs(c).toFixed(1)}%
      </span>
      <span className="ml-8 text-white/20">|</span>
    </span>
  );
}

export function CryptoTicker() {
  const row = [...items, ...items];
  return (
    <div className="sticky top-16 z-40 h-11 overflow-hidden border-y border-white/10 bg-navy">
      <div className="flex h-full items-center whitespace-nowrap animate-marquee">
        {row.map((i, idx) => (
          <Item key={idx} {...i} />
        ))}
      </div>
    </div>
  );
}
