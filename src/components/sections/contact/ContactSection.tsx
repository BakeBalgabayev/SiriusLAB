"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

// ─── Styled Components ────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 80px 24px 0;
  margin-bottom: 110px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 80px 16px 0;
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 9999px;
  border: 1px solid rgba(145, 49, 174, 0.6);
  background: transparent;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    width: 100%;
  }
`;

const BadgeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(145, 49, 174, 1);
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "left-top right"
    "left-bot right";
  border-radius: 20px;
  border: 1px solid rgba(145, 49, 174, 0.2);
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftTop = styled.div`
  grid-area: left-top;
  background: rgba(8, 4, 14, 1);
  padding: 48px 40px 24px;
  border-radius: 20px 0 0 0;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
    padding: 32px 24px 24px;
    border-radius: 20px 20px 0 0;
  }
`;

const LeftBottom = styled.div`
  grid-area: left-bot;
  background: rgba(8, 4, 14, 1);
  padding: 0 40px 48px;
  border-radius: 0 0 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 3;
    padding: 24px 24px 32px;
    border-radius: 0 0 20px 20px;
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  margin: 0 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const TitleAccent = styled.span`
  color: rgba(145, 49, 174, 1);
`;

const TitleNormal = styled.span`
  color: rgba(255, 255, 255, 1);
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  order: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`;

const SocialBtn = styled.a`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(145, 49, 174, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: rgba(120, 35, 150, 1);
  }
`;

const BottomGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  order: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    order: 0;
  }
`;

const InfoPill = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(145, 49, 174, 0.12);
  flex: 1;
`;

const InfoIconWrap = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(145, 49, 174, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const InfoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const InfoLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(255, 255, 255, 1);
`;

const InfoValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
`;

// ─── Right / Form ─────────────────────────────────────────────────────────────

const RightCol = styled.div`
  grid-area: right;
  background: rgba(18, 10, 30, 1);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 0 20px 20px 0;
  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
    padding: 32px 24px;
    border-radius: 0;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
`;

const Input = styled.input<{ $error?: boolean }>`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ $error }) => $error ? 'rgba(255, 80, 80, 0.7)' : 'rgba(145, 49, 174, 0.2)'};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: ${({ $error }) => $error ? 'rgba(255, 80, 80, 0.9)' : 'rgba(145, 49, 174, 0.6)'};
  }
`;

const FieldError = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(255, 80, 80, 1);
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownTrigger = styled.button<{ $open: boolean; $hasValue: boolean; $error?: boolean }>`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ $open, $error }) => $error ? 'rgba(255, 80, 80, 0.7)' : $open ? 'rgba(145, 49, 174, 0.6)' : 'rgba(145, 49, 174, 0.2)'};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 15px;
  font-weight: 400;
  color: ${({ $open, $hasValue }) => ($open || $hasValue) ? 'rgba(255,255,255,1)' : 'rgba(255, 255, 255, 0.3)'};
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.2s;
  text-align: left;
`;

const DropdownArrow = styled.span<{ $open: boolean }>`
  display: flex;
  align-items: center;
  opacity: 0.5;
  transform: ${({ $open }) => $open ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s;
  flex-shrink: 0;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: rgba(18, 10, 30, 1);
  border: 1px solid rgba(145, 49, 174, 0.3);
  border-radius: 12px;
  padding: 6px;
  margin: 0;
  list-style: none;
  z-index: 100;
  max-height: 260px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(145, 49, 174, 0.4);
    border-radius: 2px;
  }
`;

const DropdownItem = styled.li`
  padding: 10px 14px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: rgba(145, 49, 174, 0.55);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 56px;
  background: rgba(145, 49, 174, 1);
  color: rgba(255, 255, 255, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 4px;

  &:hover:not(:disabled) {
    background: rgba(120, 35, 150, 1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`;

const Spinner = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
  flex-shrink: 0;
`;

// ─── Modal ────────────────────────────────────────────────────────────────────

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Modal = styled.div`
  background: rgba(18, 10, 30, 1);
  border: 1px solid rgba(145, 49, 174, 0.25);
  border-radius: 24px;
  padding: 40px 36px 36px;
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation: ${fadeInScale} 0.25s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 24px 28px;
  }
`;

const ModalImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const ModalDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0;
`;

const ModalButton = styled.button`
  width: 100%;
  height: 52px;
  background: rgba(145, 49, 174, 1);
  color: rgba(255, 255, 255, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 4px;

  &:hover {
    background: rgba(120, 35, 150, 1);
  }
`;

const PlanBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(145, 49, 174, 0.12);
  border: 1px solid rgba(145, 49, 174, 0.3);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);

  span {
    color: rgba(145, 49, 174, 1);
    font-weight: 600;
  }
`;

const PlanBadgeClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(145, 49, 174, 0.2);
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(145, 49, 174, 0.5);
    color: rgba(255, 255, 255, 1);
  }
`;

const StatusMessage = styled.p<{ $error?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ $error }) => $error ? 'rgba(255, 80, 80, 1)' : 'rgba(80, 220, 130, 1)'};
  margin: 0;
  text-align: center;
`;

// ─── Inline SVG icons ─────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1" fill="white"/>
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.726.45 3.35 1.236 4.754L2 22l5.373-1.21A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.054-1.11l-.29-.173-3.19.718.754-3.1-.19-.31A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.884c-.242-.121-1.432-.707-1.654-.787-.222-.08-.384-.121-.545.121-.161.242-.626.787-.767.949-.141.161-.282.181-.524.06-.242-.12-1.022-.376-1.946-1.2-.719-.641-1.204-1.433-1.346-1.675-.141-.242-.015-.373.106-.493.109-.108.242-.282.363-.423.12-.14.16-.241.242-.403.08-.161.04-.302-.02-.423-.061-.12-.546-1.316-.748-1.802-.197-.473-.397-.409-.546-.417l-.464-.008c-.161 0-.423.06-.645.302-.222.242-.847.828-.847 2.02s.867 2.343.988 2.505c.12.161 1.706 2.606 4.134 3.653.578.25 1.029.398 1.38.51.58.184 1.108.158 1.525.096.465-.07 1.432-.585 1.634-1.15.201-.565.201-1.05.141-1.15-.06-.1-.222-.161-.464-.282z"/>
    </svg>
  );
}

// ─── City Combobox (free-text + filtered suggestions) ─────────────────────────


function CityCombobox({ placeholder, options, value, onChange, error }: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = value
    ? options.filter(o => o.label.toLowerCase().includes(value.toLowerCase()))
    : options;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <DropdownWrapper ref={ref}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        $error={error}
        onChange={e => { onChange(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <DropdownList>
          {filtered.map(opt => (
            <DropdownItem key={opt.value} onMouseDown={() => { onChange(opt.label); setOpen(false); }}>
              {opt.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

// ─── Custom Dropdown ──────────────────────────────────────────────────────────

function CustomDropdown({ placeholder, options, value, onChange, error }: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selectedLabel = options.find(o => o.value === value)?.label;

  return (
    <DropdownWrapper ref={ref}>
      <DropdownTrigger type="button" $open={open} $hasValue={!!value} $error={error} onClick={() => setOpen(v => !v)}>
        <span>{selectedLabel || placeholder}</span>
        <DropdownArrow $open={open}>
          <Image src="/icons/arrow_down.svg" alt="" width={16} height={16} unoptimized />
        </DropdownArrow>
      </DropdownTrigger>
      {open && (
        <DropdownList>
          {options.map(opt => (
            <DropdownItem key={opt.value} onClick={() => { onChange(opt.value); setOpen(false); }}>
              {opt.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";
  let result = "+7";
  if (digits.length > 1) result += " " + digits.slice(1, 4);
  if (digits.length > 4) result += " " + digits.slice(4, 7);
  if (digits.length > 7) result += " " + digits.slice(7, 9);
  if (digits.length > 9) result += " " + digits.slice(9, 11);
  return result;
}


function ContactSectionInner() {
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState(searchParams.get("plan"));
  const { lang } = useLang();
  const tr = t[lang].contact;

  const CITIES = tr.cities as unknown as { value: string; label: string }[];
  const SERVICES = tr.services as unknown as { value: string; label: string }[];

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState({ name: false, city: false, service: false, phone: false });

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    if (raw.length <= 2 && phone.startsWith("+7")) {
      setPhone("");
      return;
    }
    setPhone(formatPhone(raw));
  }

  async function handleSubmit() {
    const newErrors = {
      name: !name.trim(),
      city: !city,
      service: !service,
      phone: phone.replace(/\D/g, "").length < 11,
    };
    setErrors(newErrors);
    if (newErrors.name || newErrors.city || newErrors.service || newErrors.phone) return;
    setLoading(true);
    setStatus("idle");

    const cityLabel = city.trim();
    const serviceLabel = SERVICES.find(s => s.value === service)?.label ?? service;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, city: cityLabel, service: serviceLabel, plan: selectedPlan }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setName(""); setCity(""); setService(""); setPhone("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section>
      <Container>
        <Badge>
          <BadgeText>{tr.badge}</BadgeText>
        </Badge>

        <Card>
          <LeftTop>
            <Title>
              <TitleAccent>{tr.titleAccent}</TitleAccent>
              <TitleNormal>{tr.titleNormal}</TitleNormal>
            </Title>
            <Subtitle>{tr.subtitle}</Subtitle>
          </LeftTop>

          <LeftBottom>
            <BottomGroup>
              <InfoRow>
                <InfoPill>
                  <InfoIconWrap>
                    <Image src="/icons/phone_icon.svg" alt="" width={18} height={18} unoptimized />
                  </InfoIconWrap>
                  <InfoTextWrap>
                    <InfoLabel>{tr.salesLabel}</InfoLabel>
                    <InfoValue>+7 700 020 09 59</InfoValue>
                  </InfoTextWrap>
                </InfoPill>
                <InfoPill>
                  <InfoIconWrap>
                    <Image src="/icons/phone_icon.svg" alt="" width={18} height={18} unoptimized />
                  </InfoIconWrap>
                  <InfoTextWrap>
                    <InfoLabel>{tr.supportLabel}</InfoLabel>
                    <InfoValue>+7 700 020 09 55</InfoValue>
                  </InfoTextWrap>
                </InfoPill>
              </InfoRow>

              <SocialRow>
                <SocialBtn href="https://www.instagram.com/siriuslab.kz?igsh=enhlZW95ZWd6MWh1&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </SocialBtn>
                <SocialBtn href="https://wa.me/77000200959" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsappIcon />
                </SocialBtn>
                <SocialBtn href="https://t.me/Siriuslab_bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <Image src="/icons/tg.svg" alt="Telegram" width={26} height={26} unoptimized />
                </SocialBtn>
              </SocialRow>
            </BottomGroup>
          </LeftBottom>

          <RightCol>
            {selectedPlan && (
              <PlanBadge>
                <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
                  {tr.selectedPlan} <span>{selectedPlan}</span>
                </span>
                <PlanBadgeClose type="button" onClick={() => setSelectedPlan(null)}>
                  ✕
                </PlanBadgeClose>
              </PlanBadge>
            )}
            <FieldGroup>
              <Label>{tr.fields.name}</Label>
              <Input
                type="text"
                placeholder={tr.fields.namePlaceholder}
                value={name}
                $error={errors.name}
                onChange={e => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: false })); }}
              />
              {errors.name && <FieldError>{tr.fields.nameError}</FieldError>}
            </FieldGroup>

            <FieldGroup>
              <Label>{tr.fields.city}</Label>
              <CityCombobox
                placeholder={tr.fields.cityPlaceholder}
                options={CITIES}
                value={city}
                onChange={v => { setCity(v); if (errors.city) setErrors(p => ({ ...p, city: false })); }}
                error={errors.city}
              />
              {errors.city && <FieldError>{tr.fields.cityError}</FieldError>}
            </FieldGroup>

            <FieldGroup>
              <Label>{tr.fields.service}</Label>
              <CustomDropdown
                placeholder={tr.fields.servicePlaceholder}
                options={SERVICES}
                value={service}
                onChange={v => { setService(v); if (errors.service) setErrors(p => ({ ...p, service: false })); }}
                error={errors.service}
              />
              {errors.service && <FieldError>{tr.fields.serviceError}</FieldError>}
            </FieldGroup>

            <FieldGroup>
              <Label>{tr.fields.phone}</Label>
              <Input
                type="tel"
                placeholder="+7 777 777 77 77"
                value={phone}
                $error={errors.phone}
                onChange={e => { handlePhoneChange(e); if (errors.phone) setErrors(p => ({ ...p, phone: false })); }}
              />
              {errors.phone && <FieldError>{tr.fields.phoneError}</FieldError>}
            </FieldGroup>

            {status === "error" && (
              <StatusMessage $error>{tr.errorMsg}</StatusMessage>
            )}

            <SubmitButton type="submit" onClick={handleSubmit} disabled={loading}>
              {loading ? <Spinner /> : (
                <>
                  {tr.submitBtn}
                  <Image src="/icons/arrowRight.svg" alt="" width={16} height={16} unoptimized style={{ filter: 'brightness(0) invert(1)' }} />
                </>
              )}
            </SubmitButton>
          </RightCol>
        </Card>
      </Container>

      {status === "success" && (
        <Backdrop onClick={() => setStatus("idle")}>
          <Modal onClick={e => e.stopPropagation()}>
            <ModalImage>
              <Image src="/images/thirdP_2.png" alt="" width={280} height={160} style={{ objectFit: "contain" }} />
            </ModalImage>
            <ModalTitle>{tr.modal.title}</ModalTitle>
            <ModalDesc>
              {tr.modal.desc}
            </ModalDesc>
            <ModalButton onClick={() => setStatus("idle")}>{tr.modal.btn}</ModalButton>
          </Modal>
        </Backdrop>
      )}
    </Section>
  );
}

export default function ContactSection() {
  return (
    <Suspense fallback={null}>
      <ContactSectionInner />
    </Suspense>
  );
}
