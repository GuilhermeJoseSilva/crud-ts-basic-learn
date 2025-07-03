import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class UserRepository {
    async create (data: { name: string; email: string}) {
        return await prisma.users.create({
            data,
        });
    }
    async findByEmail(email: string) {
        return await prisma.users.findUnique({
            where: { email },
    });
}
}