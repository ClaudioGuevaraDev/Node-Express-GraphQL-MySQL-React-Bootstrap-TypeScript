import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT_APP: process.env.PORT_APP || 4000,
  HOST_APP: process.env.HOST_APP || "localhost",

  DATABASE_TYPE: process.env.DATABASE_TYPE || "mysql",
  DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  DATABASE_PORT: process.env.DATABASE_PORT || "3306",
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || "root",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "",
  DATABASE_NAME: process.env.DATABASE_NAME || "database",

  NODEMAILER_HOST: process.env.NODEMAILER_HOST || "smtp.ethereal.email",
  NODEMAILER_PORT: process.env.NODEMAILER_PORT || "587",
  NODEMAILER_USER: process.env.NODEMAILER_USER || "",
  NODEMAILER_PASS: process.env.NODEMAILER_PASS || "",
  NODEMAILER_TO: process.env.NODEMAILER_TO || "",

  SECRET_TOKEN: process.env.SECRET_TOKEN || "wenas",
};
