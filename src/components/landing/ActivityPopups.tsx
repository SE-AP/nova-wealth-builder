import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Activity = {
  id: number;
  flag: string;
  name: string;
  country: string;
  action: string;
  amount: string;
};

const POOL: Omit<Activity, "id">[] = [
  { flag: "🇺🇸", name: "Michael", country: "USA", action: "deposited", amount: "$5,000" },
  { flag: "🇬🇧", name: "Sarah", country: "UK", action: "earned", amount: "$1,240" },
  { flag: "🇩🇪", name: "Alex", country: "Germany", action: "withdrew", amount: "$12,000" },
  { flag: "🇨🇦", name: "Emma", country: "Canada", action: "deposited", amount: "$2,500" },
  { flag: "🇦🇺", name: "James", country: "Australia", action: "earned", amount: "$880" },
  { flag: "🇫🇷", name: "Léa", country: "France", action: "deposited", amount: "$8,000" },
  { flag: "🇯🇵", name: "Hiroshi", country: "Japan", action: "earned", amount: "$3,150" },
  { flag: "🇸🇬", name: "Wei", country: "Singapore", action: "withdrew", amount: "$22,400" },
  { flag: "🇳🇱", name: "Lars", country: "Netherlands", action: "deposited", amount: "$4,200" },
  { flag: "🇧🇷", name: "Carlos", country: "Brazil", action: "earned", amount: "$1,920" },
  { flag: "🇿🇦", name: "Thabo", country: "South Africa", action: "deposited", amount: "$1,000" },
  { flag: "🇰🇷", name: "Min-jun", country: "Korea", action: "earned", amount: "$2,760" },
];

export function ActivityPopups() {
  const [items, setItems] = useState<Activity[]>([]);

  useEffect(() => {
    let id = 0;
    let timeout: number;
    const schedule = () => {
      const delay = 4000 + Math.random() * 4000;
      timeout = window.setTimeout(() => {
        const pick = POOL[Math.floor(Math.random() * POOL.length)];
        const next: Activity = { ...pick, id: ++id };
        setItems((prev) => [...prev, next].slice(-2));
        window.setTimeout(() => {
          setItems((prev) => prev.filter((x) => x.id !== next.id));
        }, 5000);
        schedule();
      }, delay);
    };
    schedule();
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-2 left-2 z-50 flex w-[220px] flex-col gap-2 md:bottom-4 md:left-4 md:w-[260px]">
      <AnimatePresence>
        {items.map((a) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto rounded-lg border-l-4 border-success bg-white p-3 shadow-lg"
          >
            <div className="text-[13px] leading-snug text-ink">
              <span className="mr-1">{a.flag}</span>
              <span className="font-semibold">{a.name}</span> from {a.country} {a.action}{" "}
              <span className="font-semibold">{a.amount}</span>
            </div>
            <div className="mt-1 text-[11px] text-ink-muted">2s ago</div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
