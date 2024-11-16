"use server";

import { Resend } from "resend";

export const sendEmail = (name, email, contact) => {
  const resend = new Resend(process.env.RESEND_API);

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "nasif.fuad.arif@gmail.com",
    subject: `Pulse BD Email From ${email}`,
    html: contact,
  });
};
