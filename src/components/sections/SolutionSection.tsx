"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 9999px;
  border: 1px solid rgba(145, 49, 174, 0.4);
  background: rgba(145, 49, 174, 0.1);
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const BadgeIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(145, 49, 174, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 12px;
    height: 12px;
    color: rgba(255, 255, 255, 1);
  }
`;

const BadgeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(145, 49, 174, 1);
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
  padding-top: 8px;
`;

const StatsCard = styled.div`
  background: rgba(145, 49, 174, 0.08);
  border: 1px solid rgba(145, 49, 174, 0.15);
  border-radius: 20px;
  padding: 32px 40px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  gap: 32px 0;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 24px;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 20px;
  background: rgba(30, 14, 45, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StatContent = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
`;

const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 32px;
  height: 44px;
  background: rgba(145, 49, 174, 1);
  color: rgba(255, 255, 255, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 10px;
  white-space: nowrap;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #7a2993;
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 48px;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { icon: "/icons/1-1.png", value: "на 95%", label: "исключает ручной перенос данных" },
  { icon: "/icons/1-2.png", value: "50%",    label: "увеличение выручки у клиентов" },
  { icon: "/icons/1-3.png", value: "на 99%", label: "уменьшает допущение ошибок человека" },
  { icon: "/icons/1-4.png", value: "3 млн",  label: "тенге в год — экономия для бизнеса" },
] as const;

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2 6 5 9 10 3" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SolutionSection() {
  return (
    <Section>
      <Container>
        <Badge>
          <BadgeIcon><CheckIcon /></BadgeIcon>
          <BadgeText>Наше решение</BadgeText>
        </Badge>

        <Header>
          <Title>Интеграция МойСклад<br />и 1С Бухгалтерия</Title>
          <Description>
            Поддерживается 1С Бухгалтерия версий 3.0. Двусторонняя<br />
            синхронизация справочников и документов между МойСклад<br />
            и 1С Бухгалтерия
          </Description>
        </Header>

        <StatsCard>
          {STATS.map((stat) => (
            <StatItem key={stat.label}>
              <StatIcon>
                {stat.icon && <Image src={stat.icon} alt="" width={56} height={56} unoptimized />}
              </StatIcon>
              <StatContent>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatContent>
            </StatItem>
          ))}
        </StatsCard>

        <CTAButton href="/solutions">
          Подробнее <Image src="/icons/arrowRight.svg" alt="" width={16} height={16} unoptimized />
        </CTAButton>
      </Container>
    </Section>
  );
}
