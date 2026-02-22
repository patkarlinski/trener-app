"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const botField = formData.get("_hp_username");
  if (botField) return { error: "Bot detected!" };

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: 'Kontakt <kontakt@trenerkarlinski.pl>',
      to: [process.env.CONTACT_RECEIVER as string],
      subject: `Wiadomość od: ${name}`,
      reply_to: email,
      text: `Imię: ${name}\nE-mail: ${email}\n\nWiadomość:\n${message}`,
    });

    return { success: "Wysłano pomyślnie!" };
  } catch (err) {
    return { error: "Coś poszło nie tak." };
  }
}
