import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-navy pt-24"
      style={{
        backgroundImage:
          "radial-gradient(circle at 80% 20%, rgba(0,160,227,0.18), transparent 55%), radial-gradient(circle at 10% 90%, rgba(0,160,227,0.08), transparent 50%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[55fr_45fr] lg:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[56px]">
            Grow your wealth with institutional-grade crypto investments
          </h1>
          <p className="mt-6 max-w-[520px] text-base text-white/70 md:text-lg">
            Daily yields on digital assets. Fully automated strategies. Secure custody.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition hover:brightness-110">
              Start Investing
            </button>
            <button className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              View Plans
            </button>
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}
