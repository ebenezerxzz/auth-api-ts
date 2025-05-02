import { Request, Response } from "express";
import { UserService } from "../services/user_service";
import { EntityUserInterface } from "../../../interfaces/entity_user_interface";

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

export const registerNewUser = async (req: Request, res: Response) => {
   const { username, email, phone, password } = req.body;

   if (!username || !email || !phone || !password) {
      res.status(400).json({ MessageError: "All credentials is required!!" });
   }
   try {
      const user = await userService.createUser({ username, email, phone, password });
      res.status(200).json({ user: user });
   }
   catch (error) {
      res.status(409).json({ messageErro: error });
   }
}