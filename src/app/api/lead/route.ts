import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, city, service } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const webhook = process.env.BITRIX_WEBHOOK;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "Webhook not configured" }, { status: 500 });
  }

  const res = await fetch(`${webhook}/crm.lead.add.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        TITLE: `Заявка с сайта — ${name}`,
        NAME: name,
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        COMMENTS: `Город: ${city}\nУслуга: ${service}`,
        SOURCE_ID: "WEB",
      },
    }),
  });

  const data = await res.json();
  console.log("[Bitrix response]", JSON.stringify(data));

  if (data.result) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { ok: false, error: data.error_description ?? data.error ?? "Bitrix error" },
    { status: 400 }
  );
}
