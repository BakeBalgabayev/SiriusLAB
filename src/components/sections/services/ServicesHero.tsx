"use client";

import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 0 24px;
  margin-bottom: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 16px;
    margin-bottom: 60px;
    overflow: hidden;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  height: 452px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

/* Desktop col 1 row 1 — badge + title */
const TopLeft = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 104px 0 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
    padding: 84px 0 0;
  }
`;

/* Desktop col 1 row 2 — stats */
const BottomLeft = styled.div`
  grid-column: 1;
  grid-row: 2;
  align-self: end;
  padding-bottom: 48px;
  display: flex;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 3;
    align-self: stretch;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 48px;
    padding-top: 0;
  }
`;

/* Desktop col 2 rows 1-2 — image */
const ImageCol = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  position: relative;
  background: radial-gradient(ellipse 80% 55% at 50% 58%, rgba(90, 15, 140, 0.85) 0%, rgba(70, 10, 110, 0.4) 45%, transparent 70%);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
    height: 340px;
    margin: 32px 0;
    background: radial-gradient(ellipse 90% 55% at 50% 55%, rgba(90, 15, 140, 0.95) 0%, rgba(70, 10, 110, 0.5) 45%, transparent 70%);
  }
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: -40px;
  bottom: 0;
  background: url('/images/second_1.png') no-repeat 20% center;
  background-size: 75%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 0;
    left: -16px;
    right: -16px;
    bottom: 0;
    background-size: 95% auto;
    background-position: center 40%;
    transform: rotate(20deg);
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
    display: flex;
    width: 100%;
    border-radius: 16px;
    padding: 12px 16px;
    align-items: flex-start;
  }
`;

const BadgeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(145, 49, 174, 1);
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 44px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(255, 255, 255, 1);
  margin: 110px 0 0;

  span {
    color: rgba(145, 49, 174, 1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 48px;
    margin-top: 32px;
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
  max-width: 230px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 230px;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesHero() {
  return (
    <Section>
      <Container>
        <TopLeft>
          <Badge>
            <BadgeText>ТОП 3 партнер сервисов МойСклад, amoCRM, Битрикс24</BadgeText>
          </Badge>
          <Title>
            Наши <span>услуги</span>
          </Title>
        </TopLeft>

        <ImageCol>
          <HeroImage />
        </ImageCol>

        <BottomLeft>
          <StatItem>
            <StatValue>200+</StatValue>
            <StatLabel>успешных проектов внедрения в различных сферах бизнеса</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>20+</StatValue>
            <StatLabel>индивидуальных проектов разработки под задачи клиентов</StatLabel>
          </StatItem>
        </BottomLeft>
      </Container>
    </Section>
  );
}
