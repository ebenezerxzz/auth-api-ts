import express from "express";
import bodyParser from "body-parser";
import { MainDataSource } from "./database/data-source";
import { authMiddleware } from "../api/middlewares/auth_middleware"

import router from "../api/src/routes/router";

const server = express();
const port: number = 8080;
const host: string = "localhost";

MainDataSource.initialize()
    .then(() => {
        console.log(`Connected at database!📦`)
    })
    .then(() => {
        server.use(bodyParser.json());
        server.use(express.json());
        server.use(authMiddleware)
        server.use(router);
        server.listen(port, host, () => {
            console.log(`Server is running in ( http://${host}:${port})`)
        });
    })
    .catch((error) => {
        console.log(error);
    })