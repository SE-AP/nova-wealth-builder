export function WhyUs() {
  const points = [
    "7-12.5% daily yield on major crypto assets",
    "Institutional-grade cold storage security",
    "Automated portfolio rebalancing",
    "Real-time analytics dashboard",
    "24/7 dedicated support team",
    "Multi-asset deposit support",
  ];

  return (
    <section id="invest" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative flex h-[460px] w-full items-center justify-center">
          <BuySellArch />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Why invest with NovaCapital
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Serving investors with advanced yield strategies and secure custody.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-[#374151]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-1 shrink-0">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#00a0e3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BuySellArch() {
  // FP Markets style: two stacked 3D pill-shaped arches in deep navy with cyan edge,
  // BUY label (green) on the upper arch, SELL label (red) on the lower arch.
  return (
    <div className="relative w-full max-w-[520px]" style={{ perspective: "1400px" }}>
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(28deg) rotateY(-18deg) rotateZ(2deg)",
        }}
      >
        {/* Upper arch — BUY */}
        <ArchBand label="BUY" labelColor="#10b981" offset={0} />
        {/* Lower arch — SELL */}
        <div style={{ marginTop: "-40px" }}>
          <ArchBand label="SELL" labelColor="#ef4444" offset={1} flipped />
        </div>

        {/* Soft cyan glow under */}
        <div
          className="absolute -bottom-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,160,227,0.35), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </div>
  );
}

function ArchBand({
  label,
  labelColor,
  offset,
  flipped = false,
}: {
  label: string;
  labelColor: string;
  offset: number;
  flipped?: boolean;
}) {
  return (
    <div className="relative h-[140px] w-full" style={{ transformStyle: "preserve-3d" }}>
      <svg
        viewBox="0 0 520 160"
        className="h-full w-full"
        style={{ filter: "drop-shadow(0 20px 30px rgba(10,22,40,0.35))" }}
      >
        <defs>
          <linearGradient id={`arch-fill-${offset}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="55%" stopColor="#0a1628" />
            <stop offset="100%" stopColor="#050b18" />
          </linearGradient>
          <linearGradient id={`arch-edge-${offset}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00a0e3" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00a0e3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00a0e3" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id={`arch-shine-${offset}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer arch shape — pill with arched top */}
        <path
          d={
            flipped
              ? "M40,20 Q260,160 480,20 L480,80 Q260,220 40,80 Z"
              : "M40,140 Q260,0 480,140 L480,80 Q260,-60 40,80 Z"
          }
          fill={`url(#arch-fill-${offset})`}
          stroke={`url(#arch-edge-${offset})`}
          strokeWidth="1.5"
        />
        {/* Inner highlight */}
        <path
          d={
            flipped
              ? "M60,30 Q260,150 460,30"
              : "M60,130 Q260,10 460,130"
          }
          fill="none"
          stroke={`url(#arch-shine-${offset})`}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>

      {/* Label */}
      <span
        className="absolute font-mono text-xs font-bold tracking-[0.25em]"
        style={{
          color: labelColor,
          top: flipped ? "auto" : "18px",
          bottom: flipped ? "18px" : "auto",
          right: "32px",
          textShadow: "0 0 12px rgba(0,0,0,0.6)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
