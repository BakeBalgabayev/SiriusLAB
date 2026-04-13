"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const Card = styled.div`
  background: rgba(145, 49, 174, 0.1);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(145, 49, 174, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: rgba(145, 49, 174, 1);
  margin: 0;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  margin-top: 24px;
`;

const FileLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(145, 49, 174, 1);
`;

const ViewButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  background: rgba(178, 94, 237, 0.1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(145, 49, 174, 1);
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(20, 12, 35, 1);
  }
`;

const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  filter: invert(26%) sepia(62%) saturate(1200%) hue-rotate(265deg) brightness(80%) contrast(110%);
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const docs = [
  {
    title: "Договор оферты",
    description: "Публичная оферта на оказание услуг по внедрению и настройке систем",
    href: "#",
  },
  {
    title: "Политика конфиденциальности",
    description: "Порядок обработки и защиты персональных данных",
    href: "#",
  },
  {
    title: "Прайс-лист",
    description: "Актуальный прайс-лист на все виды услуг компании",
    href: "#",
  },
  {
    title: "Техническое задание (шаблон)",
    description: "Шаблон технического задания для проектов внедрения",
    href: "#",
  },
  {
    title: "Акт выполненных работ",
    description: "Шаблон акта приёмки-передачи выполненных работ",
    href: "#",
  },
  {
    title: "Сертификат партнёра",
    description: "Подтверждение партнёрского статуса МойСклад, amoCRM, Битрикс24",
    href: "#",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DocsCards() {
  return (
    <Section>
      <Container>
        {docs.map((doc) => (
          <Card key={doc.title}>
            <CardTop>
              <IconWrapper>
                <Image src="/icons/document_outlined.svg" alt="" width={30} height={30} unoptimized />
              </IconWrapper>
              <CardContent>
                <Title>{doc.title}</Title>
                <Description>{doc.description}</Description>
                <CardFooter>
                  <FileLabel>PDF</FileLabel>
                  <ViewButton href={doc.href}>
                    Просмотр
                    <ArrowIcon>
                      <Image src="/icons/arrowRight.svg" alt="" width={14} height={14} unoptimized />
                    </ArrowIcon>
                  </ViewButton>
                </CardFooter>
              </CardContent>
            </CardTop>
          </Card>

        ))}
      </Container>
    </Section>
  );
}
