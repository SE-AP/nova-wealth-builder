import { useRef, useState } from "react";

function BitcoinLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="btc-g" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f7931a" />
          <stop offset="100%" stopColor="#a85d00" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#btc-g)" stroke="rgba(255,255,255,0.25)" />
      <path
        fill="#fff"
        d="M41.6 28.4c.6-3.9-2.4-6-6.5-7.4l1.3-5.3-3.2-.8-1.3 5.2c-.9-.2-1.7-.4-2.6-.6l1.3-5.2-3.2-.8-1.3 5.3c-.7-.2-1.4-.3-2.1-.5v0l-4.4-1.1-.9 3.4s2.4.6 2.3.6c1.3.3 1.5 1.2 1.5 1.9l-1.5 6c.1 0 .2.1.4.1l-.4-.1-2.1 8.4c-.2.4-.6 1-1.5.8 0 .1-2.4-.6-2.4-.6l-1.6 3.7 4.2 1c.8.2 1.5.4 2.3.6l-1.3 5.4 3.2.8 1.3-5.3c.9.2 1.7.5 2.6.7l-1.3 5.2 3.2.8 1.3-5.4c5.4 1 9.5.6 11.2-4.3 1.4-3.9-.1-6.2-2.9-7.7 2.1-.5 3.6-1.8 4-4.6Zm-7.2 10.2c-1 3.9-7.5 1.8-9.7 1.3l1.7-7.1c2.1.5 9 1.6 8 5.8Zm1-10.3c-.9 3.6-6.4 1.8-8.2 1.3l1.6-6.4c1.8.4 7.5 1.3 6.6 5.1Z"
      />
    </svg>
  );
}

function EthereumLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="eth-g" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#a3b3ff" />
          <stop offset="60%" stopColor="#627eea" />
          <stop offset="100%" stopColor="#2a3a8a" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#eth-g)" stroke="rgba(255,255,255,0.25)" />
      <g fill="#fff">
        <path opacity="0.85" d="M32 8v17.7l15 6.7z" />
        <path d="M32 8 17 32.4l15-6.7z" />
        <path opacity="0.85" d="M32 43.4v12.5L47 35.2z" />
        <path d="M32 55.9V43.4L17 35.2z" />
        <path opacity="0.5" d="m32 40.6 15-8.2-15-6.7z" />
        <path opacity="0.7" d="m17 32.4 15 8.2v-14.9z" />
      </g>
    </svg>
  );
}

function SolanaLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sol-g" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#3a3a4a" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="sol-bar" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#9945ff" />
          <stop offset="100%" stopColor="#14f195" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#sol-g)" stroke="rgba(255,255,255,0.25)" />
      <g fill="url(#sol-bar)">
        <path d="M19 41.5c.3-.3.7-.5 1.1-.5h24.6c.7 0 1 .8.5 1.3l-4.7 4.7c-.3.3-.7.5-1.1.5H14.8c-.7 0-1-.8-.5-1.3z" />
        <path d="M19 22.5c.3-.3.7-.5 1.1-.5h24.6c.7 0 1 .8.5 1.3l-4.7 4.7c-.3.3-.7.5-1.1.5H14.8c-.7 0-1-.8-.5-1.3z" />
        <path d="M40.5 32c-.3-.3-.7-.5-1.1-.5H14.8c-.7 0-1 .8-.5 1.3l4.7 4.7c.3.3.7.5 1.1.5h24.6c.7 0 1-.8.5-1.3z" />
      </g>
    </svg>
  );
}

function FloatingLogo({
  Logo,
  className,
}: {
  Logo: React.FC<{ className?: string }>;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{ filter: "drop-shadow(0 20px 40px rgba(0,160,227,0.35))" }}
    >
      <Logo className="h-full w-full" />
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
        {/* Floating crypto logos */}
        <div
          className="absolute left-[8%] top-[8%] h-32 w-32 animate-float-slow md:h-40 md:w-40"
          style={{ transform: "translateZ(80px)" }}
        >
          <FloatingLogo Logo={BitcoinLogo} />
        </div>
        <div
          className="absolute right-[10%] top-[2%] h-24 w-24 animate-float md:h-28 md:w-28"
          style={{ transform: "translateZ(120px)" }}
        >
          <FloatingLogo Logo={EthereumLogo} />
        </div>
        <div
          className="absolute right-[28%] top-[28%] h-20 w-20 animate-float-delay md:h-24 md:w-24"
          style={{ transform: "translateZ(60px)" }}
        >
          <FloatingLogo Logo={SolanaLogo} />
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
