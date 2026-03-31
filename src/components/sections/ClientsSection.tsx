"use client";

import Image from "next/image";
import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 60px 24px 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const LogoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0D0D18;
  border-radius: 9999px;
  width: 147.51px;
  height: 77.35px;
  flex-shrink: 0;
  padding: 16px 24px;
`;

const LogoPlaceholder = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  line-height: 1.3;
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const CLIENTS = [
  { src: "/icons/1-2-1.svg",           alt: "1-2-1",                width: 120, height: 48 },
  { src: "/icons/1-2-2.svg",           alt: "Bloom Flowers & Decor", width: 120, height: 48 },
  { src: "/icons/1-2-3.svg",           alt: "Waseela Collection",    width: 100, height: 48 },
  { src: "/icons/1-2-4.svg",           alt: "Alemsport / Gazon Group", width: 120, height: 48 },
  { src: "/icons/1-2-5.svg",           alt: "AOC",                   width: 80,  height: 48 },
  { src: "/icons/1-2-6.svg",           alt: "PWR Laptop",            width: 60,  height: 26 },
  { src: "/icons/1-2-7.svg",           alt: "MH Marine Health",      width: 55,  height: 26 },
  { src: "/icons/1-2-8.svg",           alt: "GROHE",                 width: 75,  height: 30 },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ClientsSection() {
  return (
    <Section>
      <Container>
        {CLIENTS.map((client) => (
          <LogoCard key={client.alt}>
            {client.src ? (
              <Image
                src={client.src}
                alt={client.alt}
                width={client.width}
                height={client.height}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            ) : (
              <LogoPlaceholder>{client.alt}</LogoPlaceholder>
            )}
          </LogoCard>
        ))}
      </Container>
    </Section>
  );
}
