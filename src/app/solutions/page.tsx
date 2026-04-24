import type { Metadata } from "next";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsStats from "@/components/sections/solutions/SolutionsStats";
import SolutionsHowItWorks from "@/components/sections/solutions/SolutionsHowItWorks";
import SolutionsCards from "@/components/sections/solutions/SolutionsCards";
import SolutionsCTA from "@/components/sections/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "Решения — интеграция МойСклад с 1С и Kaspi",
  description: "Готовые интеграционные решения: МойСклад с 1С Бухгалтерия, МойСклад с Kaspi. Касса МойСклад и товарный учёт для рынка Казахстана.",
  keywords: [
    "интеграция МойСклад с 1С",
    "интеграция МойСклад с Kaspi",
    "интеграция МойСклад с каспи",
    "МойСклад",
    "мой склад",
    "программа мой склад",
    "касса мойсклад",
    "касса",
    "товарный учет",
    "Битрикс24",
    "bitrix24",
    "amoCRM",
    "CRM",
    "срм",
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsStats />
      <SolutionsHowItWorks />
      <SolutionsCards />
      <SolutionsCTA />
    </>
  );
}
