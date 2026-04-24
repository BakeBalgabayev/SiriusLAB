import type { Metadata } from "next";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingCards from "@/components/sections/pricing/PricingCards";
import PricingCTA from "@/components/sections/pricing/PricingCTA";

export const metadata: Metadata = {
  title: "Тарифы — внедрение МойСклад, Битрикс24, amoCRM",
  description: "Прозрачные тарифы внедрения МойСклад, Битрикс24 и amoCRM. Касса МойСклад, товарный учёт и интеграция с 1С и Kaspi под ключ.",
  keywords: [
    "МойСклад",
    "мой склад",
    "программа мой склад",
    "касса мойсклад",
    "товарный учет",
    "amoCRM",
    "amo",
    "Битрикс",
    "битрикс 24",
    "bitrix24",
    "CRM",
    "срм",
    "интеграция МойСклад с 1С",
    "интеграция МойСклад с Kaspi",
  ],
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
