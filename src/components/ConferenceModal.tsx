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
    <>
      <style>{`
        .conf-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          padding: 16px;
        }
        .conf-modal {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          max-width: 960px;
          width: 100%;
          box-shadow: 0 24px 60px rgba(0,0,0,0.5);
        }
        @media (max-width: 600px) {
          .conf-overlay {
            align-items: center;
            padding: 12px;
          }
          .conf-modal {
            max-width: 320px;
            border-radius: 12px;
          }
          .conf-cta-wrap {
            padding: 10px 12px !important;
          }
          .conf-cta {
            padding: 10px !important;
            font-size: 14px !important;
            border-radius: 8px !important;
          }
        }
      `}</style>
    <div
      className="conf-overlay"
      onClick={close}
    >
      <div
        className="conf-modal"
        onClick={(e) => e.stopPropagation()}
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
        <div className="conf-cta-wrap" style={{ background: "#1a1a2e", padding: "16px 20px" }}>
          <a
            className="conf-cta"
            href={CONF_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            style={{
              display: "block",
              width: "100%",
              padding: "14px",
              background: "#f04e23",
              color: "#fff",
              fontFamily: "inherit",
              fontSize: "16px",
              fontWeight: 700,
              textAlign: "center",
              borderRadius: "10px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Узнать подробнее →
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
