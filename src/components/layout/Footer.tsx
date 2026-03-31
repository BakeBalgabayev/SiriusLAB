"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const FooterWrapper = styled.footer`
  background: transparent;
  padding: 0 24px 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// ─── Top section ──────────────────────────────────────────────────────────────

const TopSection = styled.div`
  background: rgba(145, 49, 174, 0.1);
  border: 1px solid rgba(145, 49, 174, 0.15);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 32px;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoName = styled.span`
  font-family: var(--font-space-grotesk), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;

const LogoSub = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.08em;
`;

const BrandDesc = styled.p`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.5);
  max-width: 280px;
  margin: 0;
`;

const NavColumns = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 190px;
  padding-left: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding-left: 0;
  }
`;

const ColTitle = styled.h4`
  font-family: var(--font-space-grotesk), sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 12px 0;
`;

const ColLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
`;

const ColLink = styled(Link)`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Phone = styled.a`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(145, 49, 174, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  flex-shrink: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

// ─── Bottom bar ───────────────────────────────────────────────────────────────

const BottomBar = styled.div`
  background: rgba(0, 0, 0, 1);
  margin: 12px -24px 0;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const Copyright = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.3);
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    white-space: normal;
  }
`;

const Partners = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const PartnerNames = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 12px;
    flex-wrap: nowrap;
  }
`;

const PartnerLabel = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.3);
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 11px;
  }
`;

const PartnerName = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 11px;
  }
`;

const RingoLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const RingoBadge = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: auto !important;
    height: auto !important;
    max-height: 40px;
    object-fit: contain;
    image-rendering: -webkit-optimize-contrast;
  }
`;

const RingoBadgeText = styled.div`
  display: flex;
  flex-direction: column;
`;

const RingoTop = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.03em;
`;

const RingoBottom = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 9px;
  line-height: 13px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.02em;
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <FooterWrapper>
      <Inner>
        <TopSection>
          {/* Brand */}
          <Brand>
            <Image src="/icons/logo.svg" alt="Sirius Solutions Lab" width={137} height={36} />
            <BrandDesc>
              Топ-3 партнёр сервисов AmoCRM, МойСклад и Битрикс24. Автоматизация бизнес-процессов под ключ.
            </BrandDesc>
          </Brand>

          <NavColumns>
            {/* Навигация */}
            <Column>
              <ColTitle>Навигация</ColTitle>
              <ColLinks>
                <li><ColLink href="/">Главная</ColLink></li>
                <li><ColLink href="/services">Услуги</ColLink></li>
                <li><ColLink href="/solutions">Решения</ColLink></li>
                <li><ColLink href="/pricing">Тарифы</ColLink></li>
              </ColLinks>
            </Column>

            {/* Ресурсы */}
            <Column>
              <ColTitle>Ресурсы</ColTitle>
              <ColLinks>
                <li><ColLink href="/docs">Документы</ColLink></li>
                <li><ColLink href="/knowledge">База знаний</ColLink></li>
                <li><ColLink href="/contact">Контакты</ColLink></li>
              </ColLinks>
            </Column>

            {/* Контакты */}
            <Column>
              <ColTitle>Контакты</ColTitle>
              <ContactRow>
                <Phone href="tel:+77000200959">+7 700 020 09 59</Phone>
                <Socials>
                  <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <InstagramIcon />
                  </SocialLink>
                  <SocialLink href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <WhatsAppIcon />
                  </SocialLink>
                  <SocialLink href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <Image src="/icons/tg.svg" alt="Telegram" width={18} height={18} />
                  </SocialLink>
                </Socials>
              </ContactRow>
            </Column>
          </NavColumns>
        </TopSection>

        <BottomBar>
          <Copyright>© 2024 Sirius Solutions Lab. Все права защищены.</Copyright>
          <Partners>
            <PartnerLabel>Официальный партнёр:</PartnerLabel>
            <PartnerNames>
              <PartnerName>МойСклад</PartnerName>
              <PartnerName>amoCRM</PartnerName>
              <PartnerName>Битрикс24</PartnerName>
              <RingoBadge>
                <Image src="/icons/ringostat.svg" alt="Ringostat Certified Partner" width={120} height={40} />
              </RingoBadge>
            </PartnerNames>
          </Partners>
        </BottomBar>
      </Inner>
    </FooterWrapper>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
