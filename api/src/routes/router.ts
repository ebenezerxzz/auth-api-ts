import express from "express";
import { getUsers, registerNewUser } from "../controllers/user_controllers";

const router = express.Router();

router.get("/get", getUsers);
router.post("/registerUser", registerNewUser);

export default router;