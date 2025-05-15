import jwt from "jsonwebtoken";
import "dotenv/config";
import { Request, Response } from "express";
import { UserService } from "../services/user_service";
import { generateToken } from "../../Auth/generate_token";

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

export const registerUser = async (req: Request, res: Response): Promise<| any> => {
   const required = ["username", "email", "phone", "password"]
   const secretKey = process.env.SECRET_KEY as string;

   const { username, email, phone, password } = req.body;
   for (let i of required) {
      if (!req.body[i])
         res.status(400).json({ MessageError: "All credentials is required!!" });
   }
   try {
      const user = await userService.createUser({ username, email, phone, password });
      const payload = {
         username: user.username,
         email: user.email
      };
      const token = await generateToken({ payload });
      res.status(200).json({ Jwt: token });
   }
   catch (error) {
      res.status(409).json({ MessageError: error });
      console.log(error)
   }
}

export const protectedRouter = (req: Request, res: Response) => {
   res.status(200);
}