import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'

dotenv.config({path:"./.env"});

export const AppDataSource = new DataSource({
    type:"postgres",
    host:process.env.HOST,
    port:parseInt(process.env.PORT)!,
    password:process.env.PASSWORD,
    username:process.env.USER,
    database:process.env.DATABASE,
    entities: ["dist/src/entity/*.js"],  // Target compiled JavaScript files
    migrations:["dist/src/migration/**/*.js"]

})
   
AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((error) => {
        console.log('Error during Data Source initialization:', error);
    });