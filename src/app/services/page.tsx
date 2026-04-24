import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesListSection from "@/components/sections/services/ServicesListSection";

export const metadata: Metadata = {
  title: "Услуги — внедрение МойСклад, Битрикс24, amoCRM",
  description: "Внедрение и настройка МойСклад, Битрикс24 и amoCRM. Товарный учёт, касса МойСклад, CRM-система и интеграция с 1С и Kaspi под ключ.",
  keywords: [
    "МойСклад",
    "мой склад",
    "программа мой склад",
    "касса мойсклад",
    "товарный учет",
    "CRM",
    "срм",
    "amoCRM",
    "amo",
    "амосрм",
    "Битрикс",
    "битрикс 24",
    "bitrix24",
    "интеграция МойСклад с 1С",
    "интеграция МойСклад с Kaspi",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesListSection />
    </>
  );
}
