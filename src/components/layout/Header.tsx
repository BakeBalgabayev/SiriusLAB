"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Styled Components ────────────────────────────────────────────────────────

const HeaderWrapper = styled.header<{ $scrolled: boolean; $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ $scrolled, $menuOpen, theme }) =>
    $menuOpen ? theme.colors.background : $scrolled ? theme.colors.background : "transparent"};
  border-bottom: ${({ $scrolled, $menuOpen }) =>
    ($scrolled && !$menuOpen) ? "1px solid rgba(145, 49, 174, 0.15)" : "none"};
  transition: background 0.3s ease, border-bottom 0.3s ease;
  width: 100%;
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 64px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;
  z-index: 1;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ $active }) => ($active ? "rgba(145, 49, 174, 1)" : "rgba(255, 255, 255, 1)")};
  background: ${({ $active }) => ($active ? "rgba(145, 49, 174, 0.1)" : "transparent")};
  padding: 6px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #9131AE;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  flex-shrink: 0;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  line-height: 1;
  padding: 4px;
  flex-shrink: 0;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    inset: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 1);
    padding: 80px 24px 48px;
    overflow-y: auto;
    animation: ${fadeIn} 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 280px;
      background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(145, 49, 174, 0.7) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 1;
`;

const MobileNavItem = styled.li``;

const MobileNavLink = styled(Link)<{ $active?: boolean }>`
  display: block;
  font-family: var(--font-inter), sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  padding: 14px 16px;
  border-radius: 12px;
  background: ${({ $active }) => ($active ? "rgba(145, 49, 174, 0.15)" : "transparent")};
  transition: background 0.15s;

  &:hover {
    background: rgba(145, 49, 174, 0.1);
  }
`;

const MobileBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  position: relative;
  z-index: 1;
`;

const MobilePhone = styled.a`
  font-family: var(--font-inter), sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
`;

const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 24px;
  flex: 1;
  background: rgba(145, 49, 174, 1);
  color: rgba(255, 255, 255, 1);
  font-family: var(--font-inter), sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background: #4C6FD4;
  }
`;

const MobileSocialLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(145, 49, 174, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  flex-shrink: 0;
  transition: background 0.2s;

  &:hover {
    background: #4C6FD4;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// ─── Nav links config ─────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/solutions", label: "Решения" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/docs", label: "Документы" },
  { href: "/knowledge", label: "База знаний" },
  { href: "/contact", label: "Контакты" },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <HeaderWrapper $scrolled={scrolled} $menuOpen={menuOpen}>
        <Inner>
          <Logo href="/" onClick={() => setMenuOpen(false)}>
            <Image src="/icons/logo.svg" alt="Sirius Solutions Lab" width={137} height={36} priority />
          </Logo>

          <Nav>
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink key={href} href={href} $active={pathname === href}>
                {label}
              </NavLink>
            ))}
          </Nav>

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

          <HamburgerButton
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </HamburgerButton>
        </Inner>
      </HeaderWrapper>

      <MobileMenu $open={menuOpen}>
        <MobileNavList>
          {NAV_LINKS.map(({ href, label }) => (
            <MobileNavItem key={href}>
              <MobileNavLink
                href={href}
                $active={pathname === href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </MobileNavLink>
            </MobileNavItem>
          ))}
        </MobileNavList>

        <MobileBottom>
          <MobilePhone href="tel:+77000200959">+7 700 020 09 59</MobilePhone>
          <MobileActions>
            <WhatsAppButton href="https://wa.me/77000200959" target="_blank" rel="noopener noreferrer">
              Написать в WhatsApp
            </WhatsAppButton>
            <MobileSocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </MobileSocialLink>
            <MobileSocialLink href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Image src="/icons/tg.svg" alt="Telegram" width={20} height={20} />
            </MobileSocialLink>
          </MobileActions>
        </MobileBottom>
      </MobileMenu>
    </>
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
