import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesListSection from "@/components/sections/services/ServicesListSection";

export const metadata: Metadata = {
  title: "Услуги — Sirius Solutions Lab",
  description: "Внедрение и настройка МойСклад, Битрикс24 и amoCRM. Автоматизация бизнес-процессов под ключ.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesListSection />
    </>
  );
}
