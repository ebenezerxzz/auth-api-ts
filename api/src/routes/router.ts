import express from "express";
import { get_users, protected_router, register_new_user } from "../controllers/user_controllers";

const router = express.Router();

router.get("/get", get_users);
router.get("/protected", protected_router);
router.post("/registerUser", register_new_user);

export default router;