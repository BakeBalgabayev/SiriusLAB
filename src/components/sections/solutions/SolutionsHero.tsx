"use client";

import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 0 24px;
  height: 452px;
  display: flex;
  align-items: stretch;
  margin-bottom: 130px;
  position: relative;

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
    gap: 24px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 9999px;
  border: 1px solid rgba(178, 94, 237, 0.2);
  background: rgba(178, 94, 237, 0.1);
  width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    border-radius: 16px;
    justify-content: center;
  }
`;

const BadgeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(145, 49, 174, 1);
`;

const TitleWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
    font-size: 36px;
    line-height: 45px;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
  max-width: 360px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileDescription = styled.p`
  display: none;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobilePlaceholder = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    height: 366px;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SolutionsHero() {
  return (
    <Section>
      <Container>
        <Badge>
          <BadgeText>Собственная разработка</BadgeText>
        </Badge>

        <TitleWrap>
          <Title>
            <span>Интеграция</span><MobileBr /> МойСклад<br />
            и 1С Бухгалтерия
          </Title>
          <Description>
            Интеграционные решения, разработанные специально для рынка Казахстана
          </Description>
          <MobileDescription>
            Настроим систему под ваш бизнес с бесплатным сопровождением: товарный учёт, обучение команды, интеграция с маркетплейсами
          </MobileDescription>
        </TitleWrap>

        <MobilePlaceholder />
      </Container>
    </Section>
  );
}
