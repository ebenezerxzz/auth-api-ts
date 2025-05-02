import { MainDataSource } from "../../../src/database/data-source";
import { MetadataAlreadyExistsError, Repository } from "typeorm";
import { User } from "../../../../backend/src/entities/User";
import { createUserDto } from "../../../interfaces/create_user_dto_interface";

export class UserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = MainDataSource.getRepository(User);
    }

    async getAllUsers(): Promise<User[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<User | null> {
        return await this.repository.findOneBy({ id });
    }

    async createNewUser(user: createUserDto): Promise<User> {
        const newUser = this.repository.save(user);
        return newUser;
    }

    async deleteUser(id: number) {
        return await this.repository.delete({ id });
    }

    async updateUser(id: number, userColumns: Partial<User>) {
        return await this.repository.update(id, userColumns);
    }

    async findByEmail(email: string): Promise<User | null> {
        const register = await this.repository.findOneBy({ email });
        return register;
    }
}