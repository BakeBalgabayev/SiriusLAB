import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ ok: false, error: "No token" }, { status: 400 });
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ ok: false, error: "Secret not configured" }, { status: 500 });
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await res.json();

  if (data.success && data.score >= 0.5) {
    return NextResponse.json({ ok: true, score: data.score });
  }

  return NextResponse.json({ ok: false, score: data.score ?? 0 }, { status: 403 });
}
