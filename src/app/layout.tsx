import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
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
    default: "Siriuslab — Инновационный технологический портал",
    template: "%s | Siriuslab",
  },
  icons: {
    icon: "/images/image.png",
    shortcut: "/images/image.png",
    apple: "/images/image.png",
  },
  description:
    "Siriuslab — ведущий технологический портал. Разработка, дизайн, консалтинг и инновационные решения для вашего бизнеса.",
  keywords: ["Siriuslab", "технологии", "разработка", "дизайн", "портал"],
  authors: [{ name: "Siriuslab" }],
  creator: "Siriuslab",
  metadataBase: new URL("https://siriuslab.com"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://siriuslab.com",
    siteName: "Siriuslab",
    title: "Siriuslab — Инновационный технологический портал",
    description:
      "Siriuslab — ведущий технологический портал. Разработка, дизайн, консалтинг и инновационные решения для вашего бизнеса.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siriuslab — Инновационный технологический портал",
    description:
      "Siriuslab — ведущий технологический портал. Разработка, дизайн, консалтинг и инновационные решения для вашего бизнеса.",
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
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
