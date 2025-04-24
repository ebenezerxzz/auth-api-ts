import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const MainDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "inovadb",
    entities: [
        User
    ],
    migrations: [
        "src/database/migrations/*.ts"
    ],
    synchronize: false
})