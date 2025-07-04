import { error } from "console";
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

    async getAllUsers() {
        return await this.userRepository.findAll();
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findById(id);

        if(!id){
            throw new Error("User not found");
        }

        return user;
    }

    async updateUser(id: number, name: string, email: string) {
        const user = await this.userRepository.findById(id);
        if(!id) {
            throw new Error("Usuário não encontrado");
        }

        return await this.userRepository.updateById(id, { name, email });
    }

    async deleteUser(id: number) {
        const user = await this.userRepository.findById(id);

        if(!user){
            throw new Error("Usuário não encontrado");
        }

        return await this.userRepository.deleteById(id);
    }
}