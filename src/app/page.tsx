import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import StatsSection from "@/components/sections/StatsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SolutionSection from "@/components/sections/SolutionSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Siriuslab — Автоматизируем товарный учёт за 7 дней",
  description:
    "Настроим систему под ваш бизнес с бесплатным сопровождением: товарный учёт, обучение команды, интеграция с маркетплейсами. Партнёр AmoCRM, МойСклад и Битрикс24.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <StatsSection />
      <ClientsSection />
      <ServicesSection />
      <FeaturesSection />
      <SolutionSection />
      <CTASection />
    </>
  );
}
