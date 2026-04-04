"use client";

import Image from "next/image";
import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 130px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  background: rgba(145, 49, 174, 0.1);
  border-radius: 20px;
  padding: 40px 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 40px;
    padding: 32px 24px;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: #0D0D18;
  border: 1px solid rgba(145, 49, 174, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 44px;
  font-weight: 700;
  line-height: 48px;
  color: rgba(145, 49, 174, 1);
`;

const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { icon: "/images/1.png", value: "200+", label: "Компаний работают с нами" },
  { icon: "/images/2.png", value: "6+",   label: "Лет на рынке" },
  { icon: "/images/3.png", value: "50+",  label: "Проектов внедрения" },
  { icon: "/images/4.png", value: "4",    label: "Собственных решений для бизнеса" },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function StatsSection() {
  return (
    <Section>
      <Container>
        {STATS.map((stat) => (
          <StatItem key={stat.label}>
            <IconBox>
              <Image src={stat.icon} alt={stat.label} width={64} height={64} />
            </IconBox>
            <StatText>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatText>
          </StatItem>
        ))}
      </Container>
    </Section>
  );
}
