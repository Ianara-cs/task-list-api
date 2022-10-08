import { PrismaClient } from '@prisma/client';
import { ICreateUsersDTOs } from "../../dtos/ICreateUserDTOs";
import { User } from '../../entities/User';
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    private prisma

    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(data: ICreateUsersDTOs): Promise<void> {
        const user = await this.prisma.account.create({ data})
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.account.findUnique({where: {email}})
        return user
    }

    async findById(id: string): Promise<User | null> {
        const user = await this.prisma.account.findUnique({where: {id}})
        return user
    }

}