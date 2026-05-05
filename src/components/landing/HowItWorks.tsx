import { UserPlus, Wallet, LineChart, ArrowRight, ShieldCheck, Clock } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: UserPlus,
    title: "Register",
    desc: "Create your secure account in under two minutes. KYC verification is fast and fully encrypted.",
    bullets: ["Email + phone verification", "Bank-level encryption"],
  },
  {
    n: "02",
    icon: Wallet,
    title: "Fund",
    desc: "Deposit BTC, ETH, USDT or SOL directly into your custodial vault — no intermediaries.",
    bullets: ["Instant on-chain deposits", "No deposit fees"],
  },
  {
    n: "03",
    icon: LineChart,
    title: "Earn",
    desc: "Our automated strategies allocate capital across yield streams — paid daily, in your asset.",
    bullets: ["Daily payouts", "Withdraw anytime"],
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-24">
      {/* Soft accent backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,160,227,0.5), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <ShieldCheck size={14} />
            Get started in minutes
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            How to get started with NovaCapital
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Three simple steps from sign-up to your first daily yield payout.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connector line behind cards (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[68px] hidden md:block"
            style={{
              height: "2px",
              background:
                "repeating-linear-gradient(90deg, rgba(0,160,227,0.35) 0 8px, transparent 8px 16px)",
            }}
          />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="group relative flex flex-col rounded-2xl border border-hairline bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(10,22,40,0.12)]"
              >
                {/* Step number watermark */}
                <span
                  aria-hidden
                  className="absolute right-6 top-4 text-[64px] font-bold leading-none text-navy/[0.04] transition group-hover:text-accent/[0.12]"
                >
                  {s.n}
                </span>

                {/* Icon tile */}
                <div
                  className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #00a0e3 0%, #0a1628 100%)",
                    boxShadow:
                      "0 12px 28px rgba(0,160,227,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <s.icon className="text-white" size={28} strokeWidth={2} />
                  <span
                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-accent shadow-md ring-1 ring-accent/30"
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>

                <ul className="mt-5 space-y-2 border-t border-hairline pt-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-[#374151]">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + reassurance row */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <button className="group inline-flex items-center gap-2 rounded-full bg-accent px-10 py-3.5 text-sm font-semibold text-white transition hover:brightness-110">
            Get Started
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </button>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-accent" /> Account ready in ~2 min
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-accent" /> No credit card required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
