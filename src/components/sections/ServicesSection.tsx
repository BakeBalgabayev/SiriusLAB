"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 24px 24px 80px;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 24px;
  border: 1px solid rgba(145, 49, 174, 0.1);
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto 130px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/images/Rectangle.png");
    background-size: 75%;
    background-position: right center;
    background-repeat: no-repeat;
    filter: blur(16px);
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;
    margin-bottom: 60px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 12px;

  span {
    color: rgba(145, 49, 174, 1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  margin-top: 24px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(14, 10, 21, 1);
  border-radius: 16px;
  border: 1px solid transparent;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(30, 10, 48, 1);
    border-color: rgba(145, 49, 174, 0.5);
  }
`;

const CardCTA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  padding: 0;
  height: 48px;
  flex-shrink: 0;
  background: rgba(145, 49, 174, 0.1);
  color: rgba(145, 49, 174, 1);
  border: none;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 15px;
  font-weight: 500;
  border-radius: 12px;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    background: rgba(145, 49, 174, 0.2);
  }
`;

const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 34px;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const CardListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  padding-left: 16px;
  position: relative;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 1);
  }
`;


const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 32px;
  height: 44px;
  background: rgba(145, 49, 174, 1);
  color: rgba(255, 255, 255, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 10px;
  white-space: nowrap;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #4C6FD4;
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 48px;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: "/images/moysklad.png",
    title: "МойСклад",
    link: "https://www.moysklad.kz/register/?p=2020-2028",
    cta: "Попробовать бесплатно",
    items: [
      "Автоматизация складского учёта, интеграция с маркетплейсами",
      "Обмен данными с 1С Бухгалтерия для Казахстана",
      "Полное внедрение, запуск и сопровождение на старте проекта",
      "Гарантийное обслуживание до 3 месяцев",
    ],
  },
  {
    icon: "/images/bitrix24.png",
    title: "Битрикс24",
    link: "https://www.bitrix24.kz/create.php?p=12818240",
    cta: "Попробовать бесплатно",
    items: [
      "Внедрения автоматизированной CRM",
      "Настройка гибкой воронки продаж",
      "Чат-боты, ИИ агенты для отдела продаж",
      "Автоматизация с помощью автоматизированных процессов",
      "Контроль и исполнение Задач и Проектов",
      "Полное обучение и сопровождение вашей команды",
      "Интеграция с WhatsApp, Instagram, телефония",
    ],
  },
  {
    icon: "/images/amocrm.png",
    title: "amoCRM",
    link: null,
    cta: "Попробовать бесплатно",
    items: [
      "Настройка воронок продаж",
      "Интеграция с телефонией и мессенджерами",
      "Автоматизация периодических продаж",
      "Аналитика продаж",
      "Контроль продаж и целей",
      "Полное обучение и сопровождение вашей команды",
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <Section>
      <Container>
        <Title>
          Наши <span>услуги</span>
        </Title>
        <Subtitle>
          Внедряем ведущие бизнес-системы и помогаем автоматизировать процессы
        </Subtitle>

        <Grid>
          {SERVICES.map((service) => (
            <Card key={service.title}>
              <CardIcon>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  quality={100}
                  unoptimized
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardList>
                {service.items.map((item) => (
                  <CardListItem key={item}>{item}</CardListItem>
                ))}
              </CardList>
              <CardCTA
                href={service.link ?? "#"}
                target={service.link ? "_blank" : undefined}
                rel={service.link ? "noopener noreferrer" : undefined}
              >
                {service.cta}
              </CardCTA>
            </Card>
          ))}
        </Grid>

        <CTAButton href="/services">
          Все услуги <Image src="/icons/arrowRight.svg" alt="" width={16} height={16} unoptimized />
        </CTAButton>
      </Container>
    </Section>
  );
}
