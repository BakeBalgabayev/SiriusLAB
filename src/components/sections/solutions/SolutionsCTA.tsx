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
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 322px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;
    gap: 24px;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  color: rgba(255, 255, 255, 1);
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
    line-height: 40px;
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
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(178, 94, 237, 0.2);
    width: 100%;
  }
`;

const BadgeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(178, 94, 237, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    color: rgba(145, 49, 174, 1);
  }
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
    background: #4C6FD4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SolutionsCTA() {
  return (
    <Section>
      <Container>
        <Card>
          <Top>
            <Title>Хотите внедрить<br />интеграцию?</Title>
            <Badge>
              <Image src="/icons/whiteSuccess_colored.svg" alt="" width={16} height={16} unoptimized />
              <BadgeText>Оставьте заявку и мы расскажем подробнее о нашем решении</BadgeText>
            </Badge>
          </Top>

          <CTAButton href="/contact">
            Запросить демо
            <Image src="/icons/arrowRight.svg" alt="" width={16} height={16} unoptimized />
          </CTAButton>
        </Card>
      </Container>
    </Section>
  );
}
