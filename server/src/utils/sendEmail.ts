import nodemailer from "nodemailer";

export const sendEmail = async (email: string): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "henry.jacobi46@ethereal.email",
      pass: "kscG6vSH9hTuT3q5jS",
    },
  });

  await transporter.sendMail({
    from: email,
    to: "claudioguevaradev@gmail.com",
    subject: "Validate account",
    html: "<p>Hello world</p>",
  });
};
