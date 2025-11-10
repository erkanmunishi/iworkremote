// src/app/api/subscribe/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const email = String(form.get("email") || "");

    if (!email) {
      return NextResponse.redirect(new URL("/thanks?status=error", req.url), { status: 303 });
    }

    // Optional email (Resend). Safe to leave commented until keys are set.
    // const key = process.env.RESEND_API_KEY;
    // const to = process.env.FORMS_TO_EMAIL;
    // if (key && to) {
    //   const { Resend } = await import("resend");
    //   const resend = new Resend(key);
    //   await resend.emails.send({
    //     from: "iWorkRemote <forms@iworkremote.us>",
    //     to,
    //     subject: "New Newsletter Subscriber",
    //     html: `<p><strong>Email:</strong> ${email}</p>`,
    //   });
    // }

    return NextResponse.redirect(
      new URL("/thanks?status=ok&type=newsletter", req.url),
      { status: 303 }
    );
  } catch {
    return NextResponse.redirect(new URL("/thanks?status=error", req.url), { status: 303 });
  }
}
