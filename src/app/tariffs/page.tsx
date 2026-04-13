import type { Metadata } from "next";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingCards from "@/components/sections/pricing/PricingCards";
import PricingCTA from "@/components/sections/pricing/PricingCTA";

export const metadata: Metadata = {
  title: "Тарифы — Sirius Solutions Lab",
  description: "Прозрачные тарифные пакеты внедрения интеграционных решений.",
};

export default function TariffsPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PricingCTA />
    </>
  );
}
