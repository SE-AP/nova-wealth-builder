import { useMemo, useState } from "react";
import { PLANS } from "./Plans";

export function Calculator() {
  const [amount, setAmount] = useState<string>("5000");
  const [planIdx, setPlanIdx] = useState(2);

  const plan = PLANS[planIdx];
  const amt = parseFloat(amount.replace(/,/g, "")) || 0;

  const valid = amt >= plan.min;

  const { daily, monthly, total } = useMemo(() => {
    const d = (amt * plan.daily) / 100;
    return {
      daily: d,
      monthly: d * 30,
      total: (amt * plan.total) / 100,
    };
  }, [amt, plan]);

  const fmt = (n: number) =>
    "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <section id="trade" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Calculate Your Returns
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-hairline bg-white p-8 shadow-sm">
          <label className="block text-sm font-medium text-[#374151]">
            Investment Amount (USD)
          </label>
          <div className="relative mt-2">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted">$</span>
            <input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
              placeholder="5,000"
              className="w-full rounded-lg border border-[#d1d5db] py-3 pl-8 pr-4 text-base text-navy outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <p className="mt-1.5 text-xs text-ink-muted">Minimum ${plan.min.toLocaleString()}</p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            {PLANS.map((p, i) => {
              const sel = planIdx === i;
              return (
                <button
                  key={p.name}
                  onClick={() => setPlanIdx(i)}
                  className={`rounded-lg border-l-4 px-4 py-3 text-left transition ${
                    sel
                      ? "border-l-accent border-y border-r border-y-accent border-r-accent bg-[#eff6ff]"
                      : "border-l-hairline border-y border-r border-y-hairline border-r-hairline bg-white hover:border-l-accent/50"
                  }`}
                >
                  <div className="text-sm font-semibold text-navy">{p.name}</div>
                  <div className="mt-0.5 text-xs text-ink-muted">
                    {p.daily}% daily · {p.days}d · min ${p.min.toLocaleString()}
                  </div>
                </button>
              );
            })}
          </div>

          {valid && amt > 0 && (
            <>
              <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-surface-alt p-5">
                <div>
                  <div className="text-xl font-bold text-success md:text-2xl">{fmt(daily)}</div>
                  <div className="mt-1 text-xs text-ink-muted">Daily Profit</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-success md:text-2xl">{fmt(monthly)}</div>
                  <div className="mt-1 text-xs text-ink-muted">Monthly Profit</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-success md:text-2xl">{fmt(total)}</div>
                  <div className="mt-1 text-xs text-ink-muted">Total Return</div>
                </div>
              </div>
              <p className="mt-4 text-base text-navy">
                Invest <span className="font-semibold">{fmt(amt)}</span> → Earn{" "}
                <span className="font-semibold">{fmt(total)}</span> in {plan.days} days
              </p>
            </>
          )}

          <button
            disabled={!valid}
            className="mt-6 w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Start This Plan
          </button>
        </div>
      </div>
    </section>
  );
}
