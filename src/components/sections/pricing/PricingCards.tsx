"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 0 24px;
  margin-bottom: 110px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 16px;
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 75px;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div<{ $featured?: boolean }>`
  background: rgba(22, 14, 35, 1);
  border-radius: 20px;
  padding: 28px 24px 32px;
  border: 1px solid ${({ $featured }) => $featured ? 'rgba(145, 49, 174, 0.6)' : 'rgba(255, 255, 255, 0.08)'};
  display: flex;
  flex-direction: column;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 9999px;
  background: rgba(145, 49, 174, 0.12);
  border: 1px solid rgba(145, 49, 174, 0.5);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: rgba(145, 49, 174, 1);
`;

const FeaturedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 9999px;
  background: rgba(145, 49, 174, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
`;

const PlanName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 8px;
`;

const PlanSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 24px;
`;

const Price = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: rgba(145, 49, 174, 1);
  margin: 0 0 24px;
`;

const CTAButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  background: rgba(145, 49, 174, 1);
  color: rgba(255, 255, 255, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  transition: background 0.2s;
  margin-bottom: 28px;

  &:hover {
    background: rgba(120, 35, 150, 1);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(145, 49, 174, 0.5);
  margin-bottom: 28px;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
`;

const CheckIcon = styled.div<{ $white?: boolean }>`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  ${({ $white }) => $white && `
    filter: brightness(0) invert(1);
  `}
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function PricingCards() {
  const { lang } = useLang();
  const tr = t[lang].pricing;

  return (
    <Section>
      <Container>
        {tr.plans.map((plan) => (
          <Card key={plan.name} $featured={plan.featured}>
            <CardTop>
              <Badge>{plan.badge}</Badge>
              {plan.featured && <FeaturedBadge>{tr.popularBadge}</FeaturedBadge>}
            </CardTop>

            <PlanName>{plan.name}</PlanName>
            <PlanSubtitle>{plan.subtitle}</PlanSubtitle>
            <Price>{plan.price}</Price>

            <CTAButton href={`/contact?plan=${encodeURIComponent(plan.urlParam)}`}>{tr.applyBtn}</CTAButton>

            <Divider />

            <FeatureList>
              {plan.features.map((feature) => (
                <FeatureItem key={feature}>
                  <CheckIcon $white={plan.featured}>
                    <Image src="/icons/check2.svg" alt="" width={16} height={16} unoptimized />
                  </CheckIcon>
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>
          </Card>
        ))}
      </Container>
    </Section>
  );
}
