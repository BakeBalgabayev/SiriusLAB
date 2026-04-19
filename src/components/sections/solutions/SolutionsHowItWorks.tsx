"use client";

import React from "react";
import styled from "styled-components";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

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
  background: rgba(145, 49, 174, 0.1);
  border-radius: 20px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 32px;
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

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(145, 49, 174, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: rgba(145, 49, 174, 1);
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StepTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(145, 49, 174, 1);
`;

const StepDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`;

const DesktopBr = styled.br`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SolutionsHowItWorks() {
  const { lang } = useLang();
  const tr = t[lang].solutions.howItWorks;

  return (
    <Section>
      <Container>
        <Card>
          <Title>{tr.title.split("\n").map((line, i, arr) => i < arr.length - 1 ? <React.Fragment key={i}>{line}<br /></React.Fragment> : line)}</Title>

          <StepsList>
            {tr.steps.map((step) => (
              <StepItem key={step.num}>
                <StepNumber>{step.num}</StepNumber>
                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDesc>
                    {step.desc.split("\n").map((line, i, arr) => i < arr.length - 1 ? <React.Fragment key={i}>{line}<DesktopBr /></React.Fragment> : line)}
                  </StepDesc>
                </StepContent>
              </StepItem>
            ))}
          </StepsList>
        </Card>
      </Container>
    </Section>
  );
}
