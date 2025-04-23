import { UserRepository } from "../repositories/user_repository";
import { User } from "../../src/entities/User";

export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }


}
