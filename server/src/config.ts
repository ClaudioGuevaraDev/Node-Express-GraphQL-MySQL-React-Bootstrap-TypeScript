import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 4000,

  DATABASE_TYPE: process.env.DATABASE_TYPE || "mysql",
  DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  DATABASE_PORT: process.env.DATABASE_PORT || "1234",
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || "root",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "",
  DATABASE_NAME: process.env.DATABASE_NAME || "database",
};
