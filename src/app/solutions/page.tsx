import type { Metadata } from "next";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsStats from "@/components/sections/solutions/SolutionsStats";
import SolutionsHowItWorks from "@/components/sections/solutions/SolutionsHowItWorks";
import SolutionsCards from "@/components/sections/solutions/SolutionsCards";
import SolutionsCTA from "@/components/sections/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "Решения — Sirius Solutions Lab",
  description: "Интеграционные решения МойСклад и 1С Бухгалтерия для рынка Казахстана.",
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
