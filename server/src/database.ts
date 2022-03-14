import path from "path";

import { createConnection } from "typeorm";

(async () => {
  try {
    createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "claudio123",
      database: "graphql",
      entities: [path.join(__dirname, "./entities/*.js")],
      synchronize: true,
    });
  } catch (error) {
    console.log(error);
  }
})();
