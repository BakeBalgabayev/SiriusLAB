"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 9.5c.5 1 1.5 3 3.5 4s3-1 3-1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
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


const CITIES = [
  { value: "almaty", label: "Алматы" },
  { value: "astana", label: "Астана" },
  { value: "shymkent", label: "Шымкент" },
  { value: "karaganda", label: "Караганда" },
  { value: "aktobe", label: "Актобе" },
  { value: "taraz", label: "Тараз" },
  { value: "pavlodar", label: "Павлодар" },
  { value: "ust-kamenogorsk", label: "Усть-Каменогорск" },
  { value: "atyrau", label: "Атырау" },
  { value: "kostanay", label: "Костанай" },
  { value: "semey", label: "Семей" },
  { value: "kyzylorda", label: "Кызылорда" },
  { value: "uralsk", label: "Уральск" },
  { value: "petropavlovsk", label: "Петропавловск" },
  { value: "aktau", label: "Актау" },
  { value: "temirtau", label: "Темиртау" },
  { value: "kokshetau", label: "Кокшетау" },
  { value: "turkestan", label: "Туркестан" },
  { value: "taldykorgan", label: "Талдыкорган" },
  { value: "ekibastuz", label: "Экибастуз" },
  { value: "rudny", label: "Рудный" },
  { value: "zhezkazgan", label: "Жезказган" },
  { value: "balkhash", label: "Балхаш" },
  { value: "kentau", label: "Кентау" },
  { value: "zhanaozen", label: "Жанаозен" },
];

const SERVICES = [
  { value: "moysklad-impl", label: "Внедрение МоегоСклада" },
  { value: "amocrm-impl", label: "Внедрение AmoCRM" },
  { value: "bitrix-impl", label: "Внедрение Bitrix" },
  { value: "moysklad-int", label: "Интеграция МоегоСклада" },
  { value: "consultation", label: "Консультация" },
];

export default function ContactSection() {
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

    const cityLabel = CITIES.find(c => c.value === city)?.label ?? city;
    const serviceLabel = SERVICES.find(s => s.value === service)?.label ?? service;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, city: cityLabel, service: serviceLabel }),
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
          <BadgeText>Контакты</BadgeText>
        </Badge>

        <Card>
          <LeftTop>
            <Title>
              <TitleAccent>Свяжитесь </TitleAccent>
              <TitleNormal>с нами</TitleNormal>
            </Title>
            <Subtitle>Оставьте заявку, мы перезвоним через 15 минут</Subtitle>
          </LeftTop>

          <LeftBottom>
            <BottomGroup>
              <InfoRow>
                <InfoPill>
                  <InfoIconWrap>
                    <Image src="/icons/phone_icon.svg" alt="" width={18} height={18} unoptimized />
                  </InfoIconWrap>
                  <InfoTextWrap>
                    <InfoLabel>телефон:</InfoLabel>
                    <InfoValue>+7 700 020 09 59</InfoValue>
                  </InfoTextWrap>
                </InfoPill>
                <InfoPill>
                  <InfoIconWrap>
                    <Image src="/icons/clock_icon.svg" alt="" width={18} height={18} unoptimized />
                  </InfoIconWrap>
                  <InfoTextWrap>
                    <InfoLabel>Время работы:</InfoLabel>
                    <InfoValue>с 10:00 по 19:00</InfoValue>
                  </InfoTextWrap>
                </InfoPill>
              </InfoRow>

              <SocialRow>
                <SocialBtn href="#" aria-label="Instagram">
                  <InstagramIcon />
                </SocialBtn>
                <SocialBtn href="#" aria-label="WhatsApp">
                  <WhatsappIcon />
                </SocialBtn>
                <SocialBtn href="#" aria-label="Telegram">
                  <Image src="/icons/tg.svg" alt="Telegram" width={26} height={26} unoptimized />
                </SocialBtn>
              </SocialRow>
            </BottomGroup>
          </LeftBottom>

          <RightCol>
            <FieldGroup>
              <Label>Имя</Label>
              <Input
                type="text"
                placeholder="Ваше имя"
                value={name}
                $error={errors.name}
                onChange={e => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: false })); }}
              />
              {errors.name && <FieldError>Введите ваше имя</FieldError>}
            </FieldGroup>

            <FieldGroup>
              <Label>Город</Label>
              <CustomDropdown
                placeholder="Выберите город"
                options={CITIES}
                value={city}
                onChange={v => { setCity(v); if (errors.city) setErrors(p => ({ ...p, city: false })); }}
                error={errors.city}
              />
              {errors.city && <FieldError>Не выбран город</FieldError>}
            </FieldGroup>

            <FieldGroup>
              <Label>Услуга</Label>
              <CustomDropdown
                placeholder="Выберите услугу"
                options={SERVICES}
                value={service}
                onChange={v => { setService(v); if (errors.service) setErrors(p => ({ ...p, service: false })); }}
                error={errors.service}
              />
              {errors.service && <FieldError>Услуга не выбрана</FieldError>}
            </FieldGroup>

            <FieldGroup>
              <Label>Номер телефона</Label>
              <Input
                type="tel"
                placeholder="+7 777 777 77 77"
                value={phone}
                $error={errors.phone}
                onChange={e => { handlePhoneChange(e); if (errors.phone) setErrors(p => ({ ...p, phone: false })); }}
              />
              {errors.phone && <FieldError>Введите корректный номер телефона</FieldError>}
            </FieldGroup>

            {status === "error" && (
              <StatusMessage $error>Ошибка отправки. Пожалуйста, попробуйте ещё раз.</StatusMessage>
            )}

            <SubmitButton type="submit" onClick={handleSubmit} disabled={loading}>
              {loading ? <Spinner /> : (
                <>
                  Отправить заявку
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
            <ModalTitle>Мы приняли вашу заявку</ModalTitle>
            <ModalDesc>
              Перезвоним через 15 минут, ответим на вопросы и предложим решение
            </ModalDesc>
            <ModalButton onClick={() => setStatus("idle")}>Хорошо</ModalButton>
          </Modal>
        </Backdrop>
      )}
    </Section>
  );
}
