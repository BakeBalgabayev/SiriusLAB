"use client";

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
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const CardBase = styled.div`
  background: rgba(22, 14, 35, 1);
  border-radius: 20px;
  padding: 24px;
  min-height: 320px;
`;

const ImageCard = styled(CardBase)``;

const InfoCard = styled(CardBase)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconSquare = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(145, 49, 174, 0.15);
`;

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 44px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(145, 49, 174, 1);
`;

const StatLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  margin: 8px 0 0;
`;

const CardText = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 9999px;
  background: rgba(145, 49, 174, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  vertical-align: middle;
  margin: 0 4px;
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SolutionsCards() {
  return (
    <Section>
      <Container>
        <ImageCard />

        <InfoCard>
          <IconSquare />
          <div>
            <StatValue>+60</StatValue>
            <StatLabel>клиентов успешно<br />пользуются интеграцией</StatLabel>
          </div>
        </InfoCard>

        <InfoCard>
          <IconSquare />
          <CardText>
            Пока вы пользуетесь интеграцией мы оказываем постоянную
            <Badge>бесплатную</Badge>
            поддержку
          </CardText>
        </InfoCard>
      </Container>
    </Section>
  );
}
