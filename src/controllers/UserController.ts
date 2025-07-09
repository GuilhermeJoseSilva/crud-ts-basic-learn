import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async create (req: Request, res: Response) : Promise<Response> {
        const { name, email, password} = req.body;

        try{
            const newUser = await this.userService.createUser(name, email, password);
            return res.status(201).json(newUser);
        } catch (error: any) {
            return res.status(400).json({ error: error.message});
        } 
    }

    async index(req: Request, res: Response) : Promise<Response>  {
        try {
            const users = await this.userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async show(req: Request, res: Response) : Promise<Response> {
        const { id  } = req.params;

        try {
            const user = await this.userService.getUserById(Number(id));
            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) : Promise<Response> {
        const id = Number(req.params.id);
        const { name, email } = req.body;

        try {
            const updatedUser = await this.userService.updateUser(id, name, email);
            return res.status(200).json(updatedUser);
        } catch (error: any) {
            return res.status(400).json({ error: error.message});
        }
    }

    async delete(req: Request, res: Response) : Promise<Response> {
        const id = Number(req.params.id);

        try {
            await this.userService.deleteUser(id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }
}