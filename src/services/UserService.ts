import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(name: string, email: string) {
        // verifica se o email ja está cadastrado
        const userExists = await this.userRepository.findByEmail(email);
        if(userExists) {
            throw new Error("E-mail já cadastrado.");
        }

        const newUser = await this.userRepository.create({name,email});
        return newUser;
    }
}