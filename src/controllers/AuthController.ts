import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";


export class AuthController {
    private authService = new AuthService();

    async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        try {
            const token = await this.authService.login(email,password);
            return res.status(200).json({ token });
        } catch (error: any) {
            return res.status(401).json({error: error.message});
        }
    }
}