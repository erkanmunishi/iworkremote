// src/app/actions.ts
"use server";

import { redirect } from "next/navigation";

type ExplorationPayload = {
  name: string;
  email: string;
  goal?: string;
};

type SubscribePayload = {
  email: string;
};

// Optional email via Resend (only if RESEND_API_KEY is set)
async function maybeSendEmail(subject: string, html: string) {
  return;
}

export async function submitExploration(formData: FormData) {
  const data: ExplorationPayload = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    goal: formData.get("goal") ? String(formData.get("goal")) : undefined,
  };

  // Basic validation
  if (!data.name || !data.email) {
    redirect("/thanks?status=error");
  }

  // Try emailing (no-op without keys)
  await maybeSendEmail(
    "New Exploration Call Application",
    `
      <h2>Exploration Call Application</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Goal/Challenge:</strong><br/>${(data.goal ?? "").replace(/\n/g, "<br/>")}</p>
    `
  );

  // Redirect with a success flag (works even without email)
  redirect("/thanks?status=ok&type=exploration");
}

export async function subscribeNewsletter(formData: FormData) {
  const data: SubscribePayload = {
    email: String(formData.get("email") || ""),
  };

  if (!data.email) {
    redirect("/thanks?status=error");
  }

  await maybeSendEmail(
    "New Newsletter Subscriber",
    `<p><strong>Email:</strong> ${data.email}</p>`
  );

  redirect("/thanks?status=ok&type=newsletter");
}
