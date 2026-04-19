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
    "Настроим и внедрим систему, которая упростит ваш бизнес: прозрачный учёт, обученная команда и интеграции с маркетплейсами. С бесплатным сопровождением.",
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
