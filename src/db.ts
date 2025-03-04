import { AppDataSource } from "./data-source";

export async function initializeDB() {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.error("unable to load the database", error);
    process.exit(1);
  }
}
