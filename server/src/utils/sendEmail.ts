import nodemailer from "nodemailer";

import { config } from "../config";

export const sendEmail = async (email: string, id: string): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: config.NODEMAILER_HOST,
    port: parseInt(config.NODEMAILER_PORT),
    secure: false,
    auth: {
      user: config.NODEMAILER_USER,
      pass: config.NODEMAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: config.NODEMAILER_TO,
    subject: "Validate account",
    html: `<a href="http://${config.HOST_APP}:${config.PORT_APP}/auth/validateAccount/${id}" target="_blank">Validate account</a>`,
  });
};
