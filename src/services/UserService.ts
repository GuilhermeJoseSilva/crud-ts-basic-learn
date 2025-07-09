import { error } from "console";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(name: string, email: string, password: string) {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error("Email já cadastrado");
        }

        const hashedPassword = await bcrypt.hash(password, 10); // saltRounds = 10

        return await this.userRepository.create({
            name,
            email,
            password: hashedPassword,
        });
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