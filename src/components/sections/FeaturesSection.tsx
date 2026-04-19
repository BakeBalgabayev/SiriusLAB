"use client";

import styled from "styled-components";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 80px 24px 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 36px 16px 60px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 712px 1fr;
  gap: 85px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`;

const BgImage = styled.div`
  position: absolute;
  top: -40px;
  left: -140px;
  right: 20px;
  bottom: 0;
  pointer-events: none;
`;

const TitleBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 42px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
`;

const TitleLine = styled.span`
  display: block;
  background: rgba(0, 0, 0, 1);
  padding: 4px 10px;
  border-radius: 0;
  color: rgba(255, 255, 255, 1);
  position: relative;
`;

const TitleLineFirst = styled(TitleLine)`
  border-radius: 0 20px 0 0;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    right: 0;
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 1);
    border-top-right-radius: 20px;
    pointer-events: none;
  }
`;

const TitleAccent = styled.span`
  color: rgba(145, 49, 174, 1);
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;
    gap: 32px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(145, 49, 174, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(145, 49, 174, 1);

  svg {
    width: 22px;
    height: 22px;
  }
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FeatureTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  color: rgba(145, 49, 174, 1);
  margin: 0;
`;

const FeatureDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`;

// ─── Icons ────────────────────────────────────────────────────────────────────

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURE_ICONS = [<LayersIcon key="0" />, <GridIcon key="1" />, <BoltIcon key="2" />, <GlobeIcon key="3" />, <SettingsIcon key="4" />];

// ─── Component ────────────────────────────────────────────────────────────────

export default function FeaturesSection() {
  const { lang } = useLang();
  const tr = t[lang].features;

  return (
    <Section>
      <Container>
        <Left>
          <BgImage>
            <Image
              src="/images/firstP_ap.png"
              alt=""
              fill
              style={{ objectFit: "contain", objectPosition: "top right" }}
              unoptimized
            />
          </BgImage>
          <TitleBox>
            <Title>
              <TitleLineFirst style={{ marginTop: "16px" }}>{tr.titleLine1}</TitleLineFirst>
              <TitleGroup>
                <TitleLine style={{ borderRadius: "0 20px 0 0" }}><TitleAccent>{tr.titleLine2}</TitleAccent></TitleLine>
                <TitleLine>{tr.titleLine3}</TitleLine>
              </TitleGroup>
            </Title>
          </TitleBox>
        </Left>

        <Right>
          {tr.items.map((feature, i) => (
            <FeatureItem key={feature.title}>
              <IconBox>{FEATURE_ICONS[i]}</IconBox>
              <FeatureText>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDesc>{feature.desc}</FeatureDesc>
              </FeatureText>
            </FeatureItem>
          ))}
        </Right>
      </Container>
    </Section>
  );
}
