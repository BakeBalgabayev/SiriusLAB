import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, city, service, plan, utm } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const webhook = process.env.BITRIX_WEBHOOK;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "Webhook not configured" }, { status: 500 });
  }

  const utmLines = utm ? [
    utm.utm_source   ? `utm_source: ${utm.utm_source}`     : null,
    utm.utm_medium   ? `utm_medium: ${utm.utm_medium}`     : null,
    utm.utm_campaign ? `utm_campaign: ${utm.utm_campaign}` : null,
    utm.utm_content  ? `utm_content: ${utm.utm_content}`   : null,
    utm.utm_term     ? `utm_term: ${utm.utm_term}`         : null,
    utm.gclid        ? `gclid: ${utm.gclid}`               : null,
  ].filter(Boolean) : [];

  const comments = [
    `Город: ${city}`,
    `Услуга: ${service}`,
    plan ? `Тарифный пакет: ${plan}` : null,
    utmLines.length ? `\nUTM метки:\n${utmLines.join("\n")}` : null,
  ].filter(Boolean).join("\n");

  const res = await fetch(`${webhook}/crm.lead.add.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        TITLE: `Заявка с сайта — ${name}${plan ? ` [${plan}]` : ""}`,
        NAME: name,
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        COMMENTS: comments,
        SOURCE_ID: "WEB",
        ASSIGNED_BY_ID: 1,
        ...(utm?.utm_source   && { UTM_SOURCE:   utm.utm_source }),
        ...(utm?.utm_medium   && { UTM_MEDIUM:   utm.utm_medium }),
        ...(utm?.utm_campaign && { UTM_CAMPAIGN: utm.utm_campaign }),
        ...(utm?.utm_term     && { UTM_TERM:     utm.utm_term }),
        ...(utm?.utm_content  && { UTM_CONTENT:  utm.utm_content }),
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
