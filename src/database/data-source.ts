import { DataSource } from "typeorm";

import "dotenv/config";

const host: string = process.env.DB_HOST as string;
const port: number = 3306;
const username: string = process.env.DB_USERNAME as string;
const database: string = process.env.DATABASE as string;
const password: string = process.env.DB_PASSWORD as string;

export const MainDataSource = new DataSource({
    type: "mysql",
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    synchronize: true,
    migrations: [
        "src/database/migrations/**/*.ts"
    ]
});