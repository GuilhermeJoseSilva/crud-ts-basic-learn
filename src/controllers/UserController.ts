import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async create (req: Request, res: Response) {
        const { name, email } = req.body;

        try{
            const newUser = await this.userService.createUser(name, email);
            return res.status(201).json(newUser);
        } catch (error: any) {
            return res.status(400).json({ error: error.message});
        } 
    }
}