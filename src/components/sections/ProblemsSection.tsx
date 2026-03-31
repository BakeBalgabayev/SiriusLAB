"use client";

import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 0 24px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 36px;
  }
`;

const Card = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  background: rgba(145, 49, 174, 0.1);
  border: 1px solid rgba(145, 49, 174, 0.2);
  border-radius: 20px;
  padding: 32px 40px;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  min-height: 380px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    min-height: auto;
    padding: 24px;
    gap: 32px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  max-width: 380px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    gap: 24px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  white-space: nowrap;
  padding: 8px 16px;
  background: rgba(178, 94, 237, 0.1);
  border: 1px solid rgba(178, 94, 237, 0.3);
  border-radius: 9999px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    white-space: normal;
    width: fit-content;
    max-width: 100%;
  }
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(145, 49, 174, 1);
`;

const BadgeIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #9131AE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  flex-shrink: 0;
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);

  span {
    color: #9131AE;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 4px 0;
  align-self: stretch;
  justify-content: space-between;
`;

const ProblemItem = styled.div``;

const ProblemTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(145, 49, 174, 1);
  margin-bottom: 6px;
`;

const ProblemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProblemListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: flex-start;
  gap: 8px;

  &::before {
    content: "•";
    color: rgba(255, 255, 255, 0.5);
    flex-shrink: 0;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    title: "Трудности в учёте товаров",
    items: [
      "До 10–15% расхождений по остаткам при ручном учёте",
      "Ошибки в инвентаризации приводят к заморозке оборотных средств",
    ],
  },
  {
    title: "Управление задачами и проектами",
    items: [
      "До 30% задач теряются без централизованной системы",
      "Сроки срываются из-за отсутствия контроля",
    ],
  },
  {
    title: "Потеря клиентов",
    items: [
      "До 20% заявок не доходят до сделки",
      "Отсутствие воронки = непредсказуемые продажи",
    ],
  },
  {
    title: "Непрозрачность данных",
    items: [
      "Финансовые показатели и аналитика собирается вручную в Excell",
      "Данные находятся в разных таблицах и программах",
    ],
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProblemsSection() {
  return (
    <Section>
      <Card>
        <Left>
          <Badge>
            <BadgeIcon>i</BadgeIcon>
            Потери прибыли начинаются с хаоса в процессах
          </Badge>
          <Heading>
            Мы знаем, с чем <br />вы <span>сталкиваетесь</span>
          </Heading>
        </Left>

        <Right>
          {PROBLEMS.map((problem) => (
            <ProblemItem key={problem.title}>
              <ProblemTitle>{problem.title}</ProblemTitle>
              <ProblemList>
                {problem.items.map((item) => (
                  <ProblemListItem key={item}>{item}</ProblemListItem>
                ))}
              </ProblemList>
            </ProblemItem>
          ))}
        </Right>
      </Card>
    </Section>
  );
}
