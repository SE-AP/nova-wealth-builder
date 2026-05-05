import { Fingerprint, CreditCard, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Fingerprint,
    title: "Register",
    desc: "Choose your plan and complete our secure application.",
  },
  {
    icon: CreditCard,
    title: "Fund",
    desc: "Deposit BTC, ETH, USDT, or SOL instantly.",
  },
  {
    icon: TrendingUp,
    title: "Earn",
    desc: "Start earning daily yields automatically.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            How to get started with NovaCapital
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Open your investment account in minutes
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-hairline bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #00a0e3 0%, #1a7fb8 100%)",
                  boxShadow: "0 10px 25px rgba(0,160,227,0.35)",
                }}
              >
                <s.icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="rounded-full bg-accent px-10 py-3.5 text-sm font-semibold text-white transition hover:brightness-110">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
