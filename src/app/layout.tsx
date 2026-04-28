import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Siriuslab — внедрение МойСклад, Битрикс24 и amoCRM в Казахстане",
    template: "%s | Siriuslab",
  },
  icons: {
    icon: "/images/image.png",
    shortcut: "/images/image.png",
    apple: "/images/image.png",
  },
  description:
    "Внедрение и настройка МойСклад, Битрикс24, amoCRM. Товарный учёт, касса МойСклад, интеграция МойСклад с 1С и Kaspi. Автоматизация бизнеса под ключ.",
  keywords: [
    "МойСклад",
    "мой склад",
    "мойсклад вход",
    "программа мой склад",
    "мойсклад программа",
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
    "Siriuslab",
  ],
  authors: [{ name: "Siriuslab" }],
  creator: "Siriuslab",
  metadataBase: new URL("https://siriuslab.com"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://siriuslab.com",
    siteName: "Siriuslab",
    title: "Siriuslab — внедрение МойСклад, Битрикс24 и amoCRM в Казахстане",
    description:
      "Внедрение и настройка МойСклад, Битрикс24, amoCRM. Товарный учёт, касса МойСклад, интеграция МойСклад с 1С и Kaspi. Автоматизация бизнеса под ключ.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siriuslab — внедрение МойСклад, Битрикс24 и amoCRM в Казахстане",
    description:
      "Внедрение и настройка МойСклад, Битрикс24, amoCRM. Товарный учёт, касса МойСклад, интеграция МойСклад с 1С и Kaspi. Автоматизация бизнеса под ключ.",
    creator: "@siriuslab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WRR7RM9ZVV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WRR7RM9ZVV');
          `}
        </Script>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <LanguageProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </LanguageProvider>
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
