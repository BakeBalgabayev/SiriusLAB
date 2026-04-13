import type { Metadata } from "next";
import DocsHero from "@/components/sections/docs/DocsHero";
import DocsCards from "@/components/sections/docs/DocsCards";

export const metadata: Metadata = {
  title: "Документы — Sirius Solutions Lab",
  description: "Шаблоны документов и юридическая информация.",
};

export default function DocsPage() {
  return (
    <>
      <DocsHero />
      <DocsCards />
    </>
  );
}
