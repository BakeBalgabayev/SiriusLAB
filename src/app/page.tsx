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
    "Внедрение МойСклад, Битрикс24 и amoCRM под ключ. Товарный учёт, касса МойСклад, интеграция с 1С и Kaspi. Прозрачный учёт и обученная команда за 7 дней.",
  keywords: [
    "МойСклад",
    "мой склад",
    "программа мой склад",
    "мойсклад программа",
    "мойсклад вход",
    "касса мойсклад",
    "касса",
    "товарный учет",
    "CRM",
    "срм",
    "amoCRM",
    "amo",
    "amocrm вход",
    "амосрм",
    "Битрикс",
    "битрикс 24",
    "bitrix24",
    "битрикс вход",
    "интеграция МойСклад с 1С",
    "интеграция МойСклад с Kaspi",
    "интеграция МойСклад с каспи",
  ],
  openGraph: {
    title: "Siriuslab — Автоматизируем товарный учёт за 7 дней",
    description: "Внедрение МойСклад, Битрикс24 и amoCRM под ключ. Товарный учёт, касса МойСклад, интеграция с 1С и Kaspi. Прозрачный учёт и обученная команда за 7 дней.",
    url: "https://siriuslab.kz",
    siteName: "Sirius Solutions Lab",
    images: [
      {
        url: "https://siriuslab.kz/images/thirdP_1.png",
        width: 1200,
        height: 630,
        alt: "Sirius Solutions Lab — автоматизация бизнеса в Казахстане",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siriuslab — Автоматизируем товарный учёт за 7 дней",
    description: "Внедрение МойСклад, Битрикс24 и amoCRM под ключ. Товарный учёт, касса МойСклад, интеграция с 1С и Kaspi. Прозрачный учёт и обученная команда за 7 дней.",
    images: ["https://siriuslab.kz/images/thirdP_1.png"],
  },
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
