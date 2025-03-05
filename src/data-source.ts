import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: parseInt(process.env.PORT)!,
  password: process.env.PASSWORD,
  username: process.env.USER,
  database: process.env.DATABASE,
  ssl: { rejectUnauthorized: false }, // Add this

  entities:
    process.env.ENV === "local"
      ? ["src/entity/**/*.ts"]
      : ["src/entity/**/*.js"],
  // entities: ["src/entity/**/*.ts"],  // Target compiled JavaScript files
  migrations:
    process.env.ENV === "local"
      ? ["src/migration/*.ts"]
      : ["src/migration/*.js"],
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.log("Error during Data Source initialization:", error);
  });
