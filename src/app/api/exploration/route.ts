// src/app/api/exploration/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const goal = form.get("goal") ? String(form.get("goal")) : "";

    if (!name || !email) {
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
    //     subject: "New Exploration Call Application",
    //     html: `
    //       <h2>Exploration Call Application</h2>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Goal/Challenge:</strong><br/>${goal.replace(/\n/g, "<br/>")}</p>
    //     `,
    //   });
    // }

    return NextResponse.redirect(
      new URL("/thanks?status=ok&type=exploration", req.url),
      { status: 303 }
    );
  } catch {
    return NextResponse.redirect(new URL("/thanks?status=error", req.url), { status: 303 });
  }
}
