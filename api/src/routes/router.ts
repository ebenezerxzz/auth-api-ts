import express from "express";
import  { getUsers }  from "../controllers/user_controllers";

const router = express.Router();

router.get("/get", getUsers)

export default router;