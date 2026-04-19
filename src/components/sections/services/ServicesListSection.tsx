"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 0 24px 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 16px 60px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  background: radial-gradient(ellipse 55% 120% at 100% 50%, rgba(145, 49, 174, 0.25) 0%, rgba(14, 10, 21, 1) 65%);
  border: none;
  border-radius: 20px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 48px;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 24px;
    background: radial-gradient(ellipse 80% 50% at 50% 100%, rgba(145, 49, 174, 0.2) 0%, rgba(14, 10, 21, 1) 70%);
    display: flex;
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 16px;
    order: 1;
    justify-content: flex-start;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
  }
`;

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(30, 12, 48, 1);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`;

const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  margin: 0;
  max-width: 340px;
`;

const ButtonRow = styled.div`
  padding-left: 68px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileButtonRow = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    order: 3;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 32px;
  height: 52px;
  background: rgba(145, 49, 174, 1);
  color: rgba(255, 255, 255, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 600;
  border-radius: 14px;
  white-space: nowrap;
  transition: background 0.2s;
  width: fit-content;

  &:hover {
    background: #4C6FD4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 0;
    order: 2;
  }
`;

const IncludesLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;

const IncludesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const IncludesItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
`;

const CheckIcon = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICE_ICONS = ["/images/moysklad.png", "/images/amocrm.png", "/images/bitrix24.png"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesListSection() {
  const { lang } = useLang();
  const tr = t[lang].servicesPage.list;

  return (
    <Section>
      <Container>
        {tr.items.map((service, i) => (
          <Card key={service.title}>
            <Left>
              <TopRow>
                <IconWrap>
                  <Image
                    src={SERVICE_ICONS[i]}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                  />
                </IconWrap>
                <TitleBlock>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDesc>{service.desc}</CardDesc>
                </TitleBlock>
              </TopRow>
              <ButtonRow>
                <CTAButton href="/contact">
                  {tr.costBtn}
                  <Image src="/icons/arrowRight.svg" alt="" width={16} height={16} unoptimized />
                </CTAButton>
              </ButtonRow>
            </Left>

            <Right>
              <IncludesLabel>{tr.includesLabel}</IncludesLabel>
              <IncludesList>
                {service.includes.map((item) => (
                  <IncludesItem key={item}>
                    <CheckIcon>
                      <Image src="/icons/check.svg" alt="" width={20} height={20} unoptimized />
                    </CheckIcon>
                    {item}
                  </IncludesItem>
                ))}
              </IncludesList>
            </Right>

            <MobileButtonRow>
              <CTAButton href="/contact">
                {tr.costBtn} →
              </CTAButton>
            </MobileButtonRow>
          </Card>
        ))}
      </Container>
    </Section>
  );
}
