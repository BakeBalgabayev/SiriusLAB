"use client";

import React from "react";
import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 0 24px;
  margin-bottom: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 16px;
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 24px;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin: 0;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    order: 2;
  }
`;

const StatsCard = styled.div`
  background: rgba(145, 49, 174, 0.1);
  border-radius: 20px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 24px;
    order: 1;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const IconSquare = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(40, 18, 62, 1);
  flex-shrink: 0;
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 44px;
  font-weight: 700;
  line-height: 48px;
  color: rgba(145, 49, 174, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS: { value: string; label: React.ReactNode }[] = [
  { value: "95%", label: <>Исключение ручного<br />переноса данных</> },
  { value: "99%", label: <>Снижение ошибок<br />человеческого фактора</> },
  { value: "3 млн ₸", label: "Экономия в год для бизнеса" },
  { value: "24/7", label: <>Автоматическая<br />синхронизация</> },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SolutionsStats() {
  return (
    <Section>
      <Container>
        <Description>
          Мы разработали уникальное интеграционное решение, которое позволяет автоматически
          синхронизировать данные между МойСклад и 1С Бухгалтерия для Казахстана. Решение на 95%
          исключает ручной перенос данных и на 99% снижает допущение ошибок при работе с документами
        </Description>

        <StatsCard>
          {STATS.map((stat, i) => (
            <StatItem key={i}>
              <IconSquare />
              <StatContent>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatContent>
            </StatItem>
          ))}
        </StatsCard>
      </Container>
    </Section>
  );
}
