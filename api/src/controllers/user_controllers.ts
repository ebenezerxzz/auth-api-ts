import { Request, Response } from "express";
import { UserService } from "../services/user_service";

const userService = new UserService();

export const get_users = async (req: Request, res: Response): Promise<void> => {
   try {
      const data = await userService.getAll();
      res.status(200).json(data);
   }
   catch (err) {
      console.log(`Error: ${err}`)
      res.status(400).json({ error: "400: Bad request :(" })
   }
}

export const login_session = (req: Request, res: Response) => {
   const { email, password } = req.body;
   
}

export const register_new_user = async (req: Request, res: Response) => {
   const required = ["username", "email", "phone", "password"]
   
   const { username, email, phone, password } = req.body;
   const isFull = required.includes(req.body);
   if (!isFull) {
      res.status(400).json({ MessageError: "All credentials is required!!" });
   }
   try {
      const user = await userService.createUser({ username, email, phone, password });
      //Return the JWT where
      res.status(200).json({ user: user });
   }
   catch (error) {
      res.status(409).json({ messageError: error });
   }
}

export const protected_router = (req: Request, res: Response) => {
   res.status(200).json({ message: "Rota acessada com sucesso! " })
}