import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config }  from "dotenv";
import { UserRepository } from "../repositories/UserRepository";
config();

export class AuthService {


    private userRepository = new UserRepository();

    async login(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new Error("Usuário não encontrado");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Senha incorreta");
        }

        const token = jwt.sign(
            { userId: user.id },               
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        return token;
    }
}