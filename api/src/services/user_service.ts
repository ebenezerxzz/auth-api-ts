import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../../src/entities/User";
import { UserRepository } from "../repositories/user_repository";
import { createUserDto } from "../../../interfaces/create_user_dto_interface";
import { UserAlreadyExistsError } from "../../Errors/AlreadyExistsUser";

export class UserService {
    private userRepository = new UserRepository();

    async getAll() {
        const allUsers = await this.userRepository.getAllUsers();
        return allUsers;
    }

    async findById(id: number) {
        const registerById = await this.userRepository.findById(id);
        return registerById;
    }

    async loginSession(dataUser: createUserDto) {

    }

    async createUser(dataUser: createUserDto)  {
        const exists = await this.userRepository.findByEmail(dataUser.email);
        if (exists) {
            throw new UserAlreadyExistsError("User already exists!");
        }
        try {
            const hashPassword = await bcrypt.hash(dataUser.password, 8);
            const userToSave = {
                ...dataUser,
                password: hashPassword
            };
            const newUser = await this.userRepository.createNewUser(userToSave);
            return newUser;
        }
        catch (error) {
            throw new Error(`Error server side: ${error}`)
        }
    }
}