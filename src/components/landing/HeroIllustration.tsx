import { useRef, useState } from "react";

function Coin({
  symbol,
  color,
  className,
}: {
  symbol: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center rounded-full shadow-[0_20px_60px_rgba(0,160,227,0.35)] ${className ?? ""}`}
      style={{
        background: `radial-gradient(circle at 30% 25%, #ffffff55 0%, ${color} 45%, #03365a 100%)`,
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <span
        className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
        style={{ fontSize: "45%", fontWeight: 700, letterSpacing: "-0.03em" }}
      >
        {symbol}
      </span>
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%)",
        }}
      />
    </div>
  );
}

export function HeroIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 8, y: px * 12 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative h-[460px] w-full md:h-[560px]"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Floating coins */}
        <div
          className="absolute left-[8%] top-[8%] h-32 w-32 animate-float-slow md:h-40 md:w-40"
          style={{ transform: "translateZ(80px)" }}
        >
          <Coin symbol="₿" color="#1a7fb8" />
        </div>
        <div
          className="absolute right-[10%] top-[2%] h-24 w-24 animate-float md:h-28 md:w-28"
          style={{ transform: "translateZ(120px)" }}
        >
          <Coin symbol="Ξ" color="#005f8a" />
        </div>
        <div
          className="absolute right-[28%] top-[28%] h-20 w-20 animate-float-delay md:h-24 md:w-24"
          style={{ transform: "translateZ(60px)" }}
        >
          <Coin symbol="◎" color="#0a8ec0" />
        </div>

        {/* Dashboard mockup card */}
        <div
          className="absolute bottom-0 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          style={{ transform: "translateZ(40px) translateX(-50%)" }}
        >
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-ink-muted">Portfolio Balance</div>
              <div className="text-2xl font-bold text-navy">$184,520.40</div>
            </div>
            <div className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
              +12.4%
            </div>
          </div>

          {/* Mini chart */}
          <svg viewBox="0 0 300 90" className="h-20 w-full">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#00a0e3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00a0e3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 L30,60 L60,65 L90,45 L120,52 L150,38 L180,42 L210,28 L240,32 L270,18 L300,22 L300,90 L0,90 Z"
              fill="url(#g)"
            />
            <path
              d="M0,70 L30,60 L60,65 L90,45 L120,52 L150,38 L180,42 L210,28 L240,32 L270,18 L300,22"
              fill="none"
              stroke="#00a0e3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="mt-3 grid grid-cols-3 gap-3 border-t border-hairline pt-3">
            {[
              { l: "BTC", v: "0.84" },
              { l: "ETH", v: "12.4" },
              { l: "SOL", v: "248" },
            ].map((a) => (
              <div key={a.l}>
                <div className="text-[10px] font-medium uppercase tracking-wide text-ink-muted">
                  {a.l}
                </div>
                <div className="font-mono text-sm font-semibold text-navy">{a.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
