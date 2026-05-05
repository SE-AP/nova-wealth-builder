import { ArrowRight } from "lucide-react";

const points = [
  "7-12.5% daily yield on major crypto assets",
  "Institutional-grade cold storage security",
  "Automated portfolio rebalancing",
  "Real-time analytics dashboard",
  "24/7 dedicated support team",
  "Multi-asset deposit support",
];

export function WhyUs() {
  return (
    <section id="invest" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative h-[420px] w-full">
          {/* Abstract bridge / arch composition */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "900px" }}>
            <div
              className="relative h-72 w-full max-w-md"
              style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateY(-15deg)" }}
            >
              <div
                className="absolute left-0 right-0 top-8 h-20 rounded-[40%] border-2 border-accent/40"
                style={{
                  background:
                    "linear-gradient(180deg, #0a1628 0%, #1e3a5f 100%)",
                  boxShadow: "0 30px 60px rgba(0,160,227,0.25)",
                }}
              >
                <span className="absolute right-6 top-6 font-mono text-sm font-bold text-success">
                  BUY
                </span>
              </div>
              <div
                className="absolute left-0 right-0 bottom-4 h-20 rounded-[40%] border-2 border-accent/40"
                style={{
                  background:
                    "linear-gradient(180deg, #1e3a5f 0%, #0a1628 100%)",
                  boxShadow: "0 30px 60px rgba(0,160,227,0.25)",
                }}
              >
                <span className="absolute right-6 bottom-6 font-mono text-sm font-bold text-danger">
                  SELL
                </span>
              </div>
              <div
                className="absolute -left-4 top-12 h-32 w-3 rounded-full bg-accent/60"
                style={{ transform: "rotateZ(-12deg)" }}
              />
              <div
                className="absolute -right-4 top-12 h-32 w-3 rounded-full bg-accent/60"
                style={{ transform: "rotateZ(12deg)" }}
              />
            </div>
          </div>
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
                <ArrowRight className="mt-1 shrink-0 text-accent" size={20} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
