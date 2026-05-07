import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, prefix: "$", suffix: "M+", label: "Assets Under Management" },
  { value: 12000, suffix: "+", label: "Active Investors" },
  { value: 2.4, prefix: "$", suffix: "M", label: "Total Paid Out", decimals: 1 },
  { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  trigger,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  trigger: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.max(0, Math.min(1, (t - start) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, value]);

  const formatted =
    value >= 1000
      ? Math.round(n).toLocaleString()
      : n.toFixed(decimals);

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="bg-navy py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="text-3xl font-bold text-white md:text-[40px]">
              <Counter {...s} trigger={inView} />
            </div>
            <div className="mt-2 text-sm text-white/60">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
