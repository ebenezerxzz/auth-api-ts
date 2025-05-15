import express from "express";
import { authMiddleware } from "../../Auth/auth_middleware";
import { getUsers, protectedRouter, registerUser} from "../controllers/user_controllers";

const router = express.Router();

router.get("/get", getUsers);
router.get("/protected", authMiddleware, protectedRouter);
router.post("/registerUser", registerUser);

export default router;