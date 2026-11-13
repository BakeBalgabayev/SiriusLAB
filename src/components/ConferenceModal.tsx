"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STORAGE_KEY = "mrb_almaty_modal_closed";
const CONF_URL =
  "https://www.moysklad.kz/lp/almaty_031226/?utm_source=siriuslab.kz&utm_medium=cross&utm_campaign=20261203_mrb_almaty";

export default function ConferenceModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closed = sessionStorage.getItem(STORAGE_KEY);
    if (!closed) {
      const t = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        padding: "16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          maxWidth: "760px",
          width: "100%",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
        }}
      >
        <button
          onClick={close}
          aria-label="Закрыть"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            background: "rgba(0,0,0,0.5)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          ×
        </button>

        <a
          href={CONF_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          style={{ display: "block" }}
        >
          <Image
            src="/images/conference-mrb.png"
            alt="Мой Реальный Бизнес — 4 декабря, Алматы"
            width={1000}
            height={524}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </a>
      </div>
    </div>
  );
}
