"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
`;

const Card = styled.div`
  background: radial-gradient(ellipse 60% 120% at 100% 50%, rgba(145, 49, 174, 0.55) 0%, rgba(14, 10, 21, 1) 60%);
  border-radius: 20px;
  padding: 40px 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 28px 24px;
    gap: 24px;
    align-items: flex-start;
  }
`;

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
  flex: 1;
`;

const ImageCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 42px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(255, 255, 255, 1);
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: rgba(178, 94, 237, 0.1);
  border: 1px solid rgba(178, 94, 237, 0.2);
  width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const BadgeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(178, 94, 237, 1);
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 24px;
  height: 48px;
  background: rgba(145, 49, 174, 1);
  color: rgba(255, 255, 255, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  width: fit-content;
  transition: background 0.2s;

  &:hover {
    background: rgba(120, 35, 150, 1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function PricingCTA() {
  return (
    <Section>
      <Container>
        <Card>
          <ContentCol>
            <Title>Нужен индивидуальный<br />расчёт?</Title>
            <Badge>
              <Image src="/icons/whiteSuccess_colored.svg" alt="" width={16} height={16} unoptimized />
              <BadgeText>Оставьте заявку, перезвоним через 15 минут</BadgeText>
            </Badge>
            <CTAButton href="/contact">
              Связаться с нами
              <Image src="/icons/arrowRight.svg" alt="" width={16} height={16} unoptimized />
            </CTAButton>
          </ContentCol>

          <ImageCol>
            <Image src="/images/firstP_end.png" alt="" width={260} height={260} unoptimized style={{ objectFit: 'contain' }} />
          </ImageCol>
        </Card>
      </Container>
    </Section>
  );
}
