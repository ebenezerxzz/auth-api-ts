import jwt from "jsonwebtoken";
import "dotenv/config";
import { TokenInterface } from "../../interfaces/token_interface";

const secretKey = process.env.SECRET_KEY as string;

export const generateToken = async({ payload }: TokenInterface) => {
    const token = jwt.sign({username: payload.username, email: payload.email}, secretKey, {expiresIn: "1m"});
    return token;
}