"use client";

import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 0 24px;
  height: 452px;
  display: flex;
  align-items: stretch;
  margin-bottom: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 16px;
    height: auto;
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 104px 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 84px 0 48px;
    gap: 32px;
  }
`;

const Top = styled.div`
  display: contents;
`;

const MobilePlaceholder = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    height: 366px;
    margin-bottom: 32px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 9999px;
  border: 1px solid rgba(178, 94, 237, 0.2);
  background: rgba(178, 94, 237, 0.1);
  width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    border-radius: 16px;
    background: rgba(178, 94, 237, 0.1);
    border: 1px solid rgba(178, 94, 237, 0.2);
  }
`;

const BadgeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(145, 49, 174, 1);
`;

const MobileBr = styled.br`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 44px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(255, 255, 255, 1);
  margin: 0;

  span {
    color: rgba(145, 49, 174, 1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 32px;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 24px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(145, 49, 174, 1);
`;

const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  max-width: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 218px;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesHero() {
  return (
    <Section>
      <Container>
        <Top>
          <Badge>
            <BadgeText>ТОП 3 партнер сервисов<MobileBr /> МойСклад, amoCRM, Битрикс24</BadgeText>
          </Badge>
          <Title>
            Наши <span>услуги</span>
          </Title>
        </Top>

        <MobilePlaceholder />
        <Stats>
          <StatItem>
            <StatValue>200+</StatValue>
            <StatLabel>успешных проектов внедрения в различных сферах бизнеса</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>20+</StatValue>
            <StatLabel>индивидуальных проектов разработки под задачи клиентов</StatLabel>
          </StatItem>
        </Stats>
      </Container>
    </Section>
  );
}
