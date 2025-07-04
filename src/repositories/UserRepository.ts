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

    async findById(id: number) {
        return await prisma.users.findUnique({
            where: { id },
        });
    }

    async findAll() {
        return await prisma.users.findMany();
    }

    async updateById(id: number, data: {name: string; email: string}) {
        return await prisma.users.update({
            where: { id },
            data
        });
    }

    async deleteById(id: number) {
        return await prisma.users.delete({
            where: { id },
        });
    }
}