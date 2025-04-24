import { Request, Response } from "express";
import { UserService } from "../services/user_service";
import { User } from "../../../src/entities/User";

const userService = new UserService();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
        try {
                const data = await userService.getAll();
                res.status(200).json(data);
        }
        catch (err) {
                console.log(`Error: ${err}`)
                res.status(400).json({ error: "400: Bad request :(" })
        }
}

