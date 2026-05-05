import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { CryptoTicker } from "@/components/landing/CryptoTicker";
import { WhyUs } from "@/components/landing/WhyUs";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Plans } from "@/components/landing/Plans";
import { Calculator } from "@/components/landing/Calculator";
import { Stats } from "@/components/landing/Stats";
import { ActivityPopups } from "@/components/landing/ActivityPopups";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NovaCapital — Institutional-grade crypto investing" },
      {
        name: "description",
        content:
          "Daily yields on digital assets. Fully automated strategies. Secure custody. Invest with NovaCapital.",
      },
      { property: "og:title", content: "NovaCapital — Institutional-grade crypto investing" },
      {
        property: "og:description",
        content: "Daily yields on digital assets. Fully automated strategies. Secure custody.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <CryptoTicker />
      <WhyUs />
      <HowItWorks />
      <Plans />
      <Calculator />
      <Stats />
      <Footer />
      <ActivityPopups />
    </main>
  );
}
