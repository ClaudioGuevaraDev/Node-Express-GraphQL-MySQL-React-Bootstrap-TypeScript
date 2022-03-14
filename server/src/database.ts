import path from "path";

import { createConnection } from "typeorm";

import { config } from "./config"

(async () => {
  const type: any = config.DATABASE_TYPE

  try {
    createConnection({
      type: type,
      host: config.DATABASE_HOST,
      port: Number.parseInt(config.DATABASE_PORT),
      username: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE_NAME,
      entities: [path.join(__dirname, "./entities/*.js")],
      synchronize: true,
    });
  } catch (error) {
    console.log(error);
  }
})();
