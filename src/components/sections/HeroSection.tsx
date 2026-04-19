"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding-top: 120px;
  padding-bottom: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 120px;
    padding-bottom: 0;
    min-height: unset;
    height: auto;
  }
`;

const GlowBackground = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url('/images/Rectangle.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileGlow = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(ellipse 55% 35% at 25% 60%, rgba(145, 49, 174, 0.55) 0%, transparent 70%),
      radial-gradient(ellipse 55% 35% at 75% 75%, rgba(145, 49, 174, 0.45) 0%, transparent 70%);
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const PartnerBadge = styled.div`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 8px 20px;
  border: 1px solid rgba(145, 49, 174, 0.5);
  border-radius: 9999px;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  color: rgba(145, 49, 174, 0.9);
  background: rgba(10, 0, 18, 0.6);
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-self: stretch;
    white-space: normal;
    height: auto;
  }
`;

const Heading = styled.h1`
  margin-top: 146px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 44px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0;
  width: 580px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 32px;
    font-size: 28px;
    line-height: 34px;
    width: 100%;
  }
`;

const HeadingAccent = styled.span`
  background: linear-gradient(135deg, #9131AE 0%, #C965E8 60%, #E879F9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeadingWhite = styled.span`
  color: rgba(255, 255, 255, 1);
`;

// Accent на десктопе, белый на мобилке
const HeadingAccentToWhite = styled.span`
  background: linear-gradient(135deg, #9131AE 0%, #C965E8 60%, #E879F9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: none;
    -webkit-text-fill-color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
`;

// Перенос только на мобилке
const MobileBr = styled.br`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Description = styled.p`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  width: 580px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const CTAButton = styled(Link)`
  margin-top: 146px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 283px;
  height: 44px;
  padding: 0 32px;
  white-space: nowrap;
  justify-content: center;
  background: #9131AE;
  color: rgba(255, 255, 255, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  border-radius: 10px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #4C6FD4;
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 32px;
    width: 100%;
  }
`;

const TrustRow = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

const ClientLogos = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  & > * + * {
    margin-left: -10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    & > * + * {
      margin-left: -8px;
    }
  }
`;

const ClientLogoCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0f1729;
  border: 2px solid #0D0118;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 36px;
    height: 36px;
  }
`;

const TrustText = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  margin: 0;

  strong {
    color: #9131AE;
    font-family: ${({ theme }) => theme.fonts.inter};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
    line-height: 20px;

    strong {
      display: block;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 60px;
  width: 534px;
  height: 546px;
  pointer-events: none;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    height: 320px;
    margin-top: 40px;
    overflow: hidden;

    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: contain;
      object-position: center top;
    }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <Section>
      <GlowBackground />
      <MobileGlow />
      <Inner>
        <Content>
          <PartnerBadge>
            {tr.badge}
          </PartnerBadge>

          <Heading>
            <HeadingAccent>{tr.heading1}</HeadingAccent>
            <br />
            <HeadingWhite>{tr.heading2}</HeadingWhite>
            <MobileBr />
            <HeadingAccentToWhite>{tr.heading3}</HeadingAccentToWhite>
          </Heading>

          <Description>
            {tr.description}
          </Description>

          <CTAButton href="/contact">
            {tr.cta}
            <Image src="/icons/arrowRight.svg" alt="" width={16} height={16} unoptimized />
          </CTAButton>

          <TrustRow>
            <ClientLogos>
              {[
                { src: "/images/grohe.png", alt: "GROHE" },
                { src: "/images/mh.png", alt: "MH Marine Health" },
                { src: "/images/prokitchen.png", alt: "PRO Kitchen" },
                { src: "/images/pwr.png", alt: "PWR Laptop" },
              ].map((logo) => (
                <ClientLogoCircle key={logo.alt}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={48}
                    height={48}
                    unoptimized
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </ClientLogoCircle>
              ))}
            </ClientLogos>
            <TrustText>
              <strong>{tr.trustText1}</strong>{tr.trustText2}
            </TrustText>
          </TrustRow>

          <HeroImageWrapper>
            <Image
              src="/images/hero-cards.png"
              alt="Битрикс24, amoCRM, OZON, Wildberries — интеграции"
              width={534}
              height={546}
              priority
            />
          </HeroImageWrapper>
        </Content>
      </Inner>
    </Section>
  );
}
