"use client";

import styled from "styled-components";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto 130px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 24px;
  border: 1px solid rgba(145, 49, 174, 0.1);
  background: rgba(0, 0, 0, 1);
  padding: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 32px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/images/Rectangle.png");
    background-size: 75%;
    background-position: 135% center;
    background-repeat: no-repeat;
    filter: blur(16px);
    z-index: 0;
  }
`;

const Title = styled.h2`
  font-family: var(--font-space-grotesk), sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 48px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
  max-width: 600px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
    line-height: 30px;
    max-width: 100%;
    word-break: break-word;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 9999px;
  border: 1px solid rgba(178, 94, 237, 0.3);
  background: rgba(178, 94, 237, 0.1);
  width: fit-content;
  position: relative;
  z-index: 1;
  margin-bottom: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    white-space: normal;
    width: 100%;
  }
`;

const BadgeText = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(145, 49, 174, 1);
`;

const BadgeIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(145, 49, 174, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  flex-shrink: 0;
`;

const DesktopImage = styled.div`
  position: absolute;
  right: 160px;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 300px;
  pointer-events: none;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  height: 48px;
  border-radius: 10px;
  background: rgba(145, 49, 174, 1);
  font-family: var(--font-inter), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #4C6FD4;
  }
`;

const ButtonOutline = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 28px;
  height: 48px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  font-family: var(--font-inter), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: #4C6FD4;
    border-color: #4C6FD4;
  }
`;

export default function CTASection() {
  const { lang } = useLang();
  const tr = t[lang].cta;

  return (
    <Section>
      <Card>
        <DesktopImage>
          <Image
            src="/images/firstP_end.png"
            alt=""
            fill
            style={{ objectFit: "contain", objectPosition: "center right" }}
            unoptimized
          />
        </DesktopImage>
        <Title>{tr.title.split("\n").map((line, i, arr) => i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>)}</Title>
        <Badge>
          <Image src="/icons/whiteSuccess_colored.svg" alt="" width={20} height={20} />
          <BadgeText>
            {tr.badge}
          </BadgeText>
        </Badge>
        <Buttons>
          <ButtonPrimary href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            {tr.whatsapp}
          </ButtonPrimary>
          <ButtonOutline href="#">
            {tr.apply}
            <Image src="/icons/arrowRight.svg" alt="" width={16} height={16} />
          </ButtonOutline>
        </Buttons>
      </Card>
    </Section>
  );
}
