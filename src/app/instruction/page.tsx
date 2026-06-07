import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Инструкция — Интеграция 1С с МойСклад | Sirius Solutions Lab",
  description: "Подробная инструкция по настройке интеграции МойСклад с 1С:Бухгалтерия Казахстан. Синхронизация документов, справочников и автоматический обмен данными.",
};

export default function InstructionPage() {
  return (
    <iframe
      src="https://zeus-cdn.moysklad.ru/261a6a3e-c9ba-4956-b2ed-69267156cc06/8d4873b1-5538-43f1-9bc4-de4036540a82/4/manual/index.html?random=FMnlgb"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
      }}
      title="Инструкция — Интеграция 1С с МойСклад"
      allowFullScreen
    />
  );
}
