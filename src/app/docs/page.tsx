import type { Metadata } from "next";
import DocsHero from "@/components/sections/docs/DocsHero";
import DocsCards from "@/components/sections/docs/DocsCards";

export const metadata: Metadata = {
  title: "Документы — Sirius Solutions Lab",
  description: "Шаблоны документов и юридическая информация по внедрению МойСклад, Битрикс24, amoCRM и интеграциям с 1С и Kaspi.",
  keywords: [
    "МойСклад",
    "мой склад",
    "программа мой склад",
    "мойсклад вход",
    "касса мойсклад",
    "товарный учет",
    "CRM",
    "срм",
    "amoCRM",
    "Битрикс24",
    "bitrix24",
    "интеграция МойСклад с 1С",
    "интеграция МойСклад с Kaspi",
  ],
};

export default function DocsPage() {
  return (
    <>
      <DocsHero />
      <DocsCards />
    </>
  );
}
