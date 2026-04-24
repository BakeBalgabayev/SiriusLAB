import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Контакты — Sirius Solutions Lab",
  description: "Связаться по внедрению МойСклад, Битрикс24, amoCRM. Консультация по товарному учёту, CRM и интеграции с 1С и Kaspi. Перезвоним через 15 минут.",
  keywords: [
    "МойСклад",
    "мой склад",
    "мойсклад вход",
    "касса мойсклад",
    "товарный учет",
    "CRM",
    "срм",
    "amoCRM",
    "amocrm вход",
    "Битрикс",
    "битрикс 24",
    "bitrix24",
    "битрикс вход",
    "интеграция МойСклад с 1С",
    "интеграция МойСклад с Kaspi",
  ],
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
