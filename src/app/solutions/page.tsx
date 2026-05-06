import type { Metadata } from "next";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsStats from "@/components/sections/solutions/SolutionsStats";
import SolutionsHowItWorks from "@/components/sections/solutions/SolutionsHowItWorks";
import SolutionsCards from "@/components/sections/solutions/SolutionsCards";
import SolutionsCTA from "@/components/sections/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "Интеграция МойСклад с 1С:Бухгалтерия Казахстан | Sirius Solutions Lab",
  description: "Автоматизация обмена данными между МойСклад и 1С:Бухгалтерия Казахстан. Экономия до 20 часов в неделю, снижение ошибок до 95%.",
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
  openGraph: {
    title: "Интеграция МойСклад с 1С:Бухгалтерия Казахстан | Sirius Solutions Lab",
    description: "Автоматизация обмена данными между МойСклад и 1С:Бухгалтерия Казахстан. Экономия до 20 часов в неделю, снижение ошибок до 95%.",
    url: "https://siriuslab.kz/solutions",
    siteName: "Sirius Solutions Lab",
    images: [
      {
        url: "https://siriuslab.kz/images/thirdP_1.png",
        width: 1200,
        height: 630,
        alt: "Интеграция МойСклад с 1С:Бухгалтерия Казахстан",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Интеграция МойСклад с 1С:Бухгалтерия Казахстан | Sirius Solutions Lab",
    description: "Автоматизация обмена данными между МойСклад и 1С:Бухгалтерия Казахстан. Экономия до 20 часов в неделю, снижение ошибок до 95%.",
    images: ["https://siriuslab.kz/images/thirdP_1.png"],
  },
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
