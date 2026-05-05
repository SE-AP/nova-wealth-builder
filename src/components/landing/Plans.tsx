import { Bitcoin, Coins, Gem } from "lucide-react";

export const PLANS = [
  {
    name: "Conservative",
    icon: Bitcoin,
    daily: 7.0,
    days: 30,
    min: 500,
    total: 210,
  },
  {
    name: "Balanced",
    icon: Coins,
    daily: 9.0,
    days: 60,
    min: 2000,
    total: 540,
  },
  {
    name: "Aggressive",
    icon: Gem,
    daily: 12.5,
    days: 90,
    min: 5000,
    total: 1125,
  },
];

const fmt = (n: number) => n.toLocaleString("en-US");

export function Plans() {
  return (
    <section id="markets" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Investment Plans
          </h2>
          <p className="mt-3 text-base text-ink-muted">Choose your strategy</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-xl border border-hairline border-l-4 border-l-accent bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between p-6">
                <h3 className="text-xl font-semibold text-navy">{p.name}</h3>
                <p.icon size={22} className="text-accent" />
              </div>
              <div className="border-t border-hairline px-6 py-6">
                <div className="text-[40px] font-bold leading-none text-accent">
                  {p.daily.toFixed(1)}%
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
                  Daily Return
                </div>

                <ul className="mt-6 space-y-3 text-sm text-[#4b5563]">
                  <li className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-medium text-navy">{p.days} days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Min Investment</span>
                    <span className="font-medium text-navy">${fmt(p.min)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Total Return</span>
                    <span className="font-medium text-success">{p.total}%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Principal Return</span>
                    <span className="font-medium text-navy">Yes</span>
                  </li>
                </ul>

                <button className="mt-7 w-full rounded-full bg-navy py-3 text-sm font-semibold text-white transition hover:bg-navy-2">
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
