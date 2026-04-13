import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Контакты — Sirius Solutions Lab",
  description: "Свяжитесь с нами. Оставьте заявку, мы перезвоним через 15 минут.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
