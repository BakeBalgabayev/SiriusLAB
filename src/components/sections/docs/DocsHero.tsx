"use client";

import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 0 24px;
  margin-bottom: 110px;

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
  height: 560px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 104px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 84px 0 0;
    gap: 16px;
    order: 1;
  }
`;

const ImageCol = styled.div`
  position: relative;
  background: radial-gradient(ellipse 80% 55% at 50% 58%, rgba(90, 15, 140, 0.85) 0%, rgba(70, 10, 110, 0.4) 45%, transparent 70%);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
    height: 380px;
    margin: 32px 0;
    background: radial-gradient(ellipse 90% 55% at 50% 55%, rgba(90, 15, 140, 0.95) 0%, rgba(70, 10, 110, 0.5) 45%, transparent 70%);
  }
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/docsP_1.png') no-repeat 35% 55%;
  background-size: 75%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 0;
    left: -16px;
    right: -16px;
    bottom: 0;
    background-size: 65% auto;
    background-position: center center;
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
    padding: 12px 16px;
  }
`;

const BadgeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(145, 49, 174, 1);
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  color: rgba(145, 49, 174, 1);
  margin: 0;
  margin-top: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 48px;
    line-height: 56px;
    margin-top: 0;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
  max-width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function DocsHero() {
  return (
    <Section>
      <Container>
        <ContentCol>
          <Badge>
            <BadgeText>Готовые шаблоны</BadgeText>
          </Badge>

          <Title>Документы</Title>

          <Description>
            Шаблоны документов и юридическая информация
          </Description>
        </ContentCol>

        <ImageCol>
          <HeroImage />
        </ImageCol>
      </Container>
    </Section>
  );
}
