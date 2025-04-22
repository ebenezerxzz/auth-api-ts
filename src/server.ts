import Express from "express";
import { MainDataSource } from "./database/data-source";

const server = Express();
const port: number = 3000;
const host: string = "localhost";

MainDataSource.initialize()
    .then(() => {
        console.log(`Connected at database!📦`)
    })
    .then(() => {
        server.use(Express.json());
        server.listen(port, host, () => {
            console.log(`Server is running in ( https://${host}:${port})`)
        });
    })
    .catch((error) => {
        console.log(error);
    })