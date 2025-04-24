import { UserRepository } from "../repositories/user_repository";
import { User } from "../../../src/entities/User";

import { Request, Response } from "express";

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

    async createUser(dataUser: User): Promise<User | null> {
        const exists = await this.userRepository.findByEmail(dataUser.email!);
        if(exists) {
            throw new Error(`This user already exists!: ${exists.email}`);
        }
        const newUser = await this.userRepository.createNewUser(dataUser);
        return newUser;
    }
}