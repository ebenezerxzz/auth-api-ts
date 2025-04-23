import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { MainDataSource } from "./database/data-source"

const database = process.env.DATABASE;
const host: string = process.env.HOST_SERVER as string;
const port: number = 3000 as number

const server = express();

MainDataSource.initialize()
    .then(() => {
        console.log("Connected at database!");
    })
    .then(() => {
        server.use(express.json());
        server.listen(port, host, () => {
            console.log(`Server is running in https://${host}:${port}`);
        });
    })
    .catch((err) => {
        console.log(`Error connecting ro the database: ${database}`)
    })
    .finally(() => {
        console.log("Process connection finallized.")
    })
