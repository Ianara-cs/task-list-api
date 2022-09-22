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
        const user = await this.prisma.user.create({data})
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findUniqueOrThrow({where: {email}})
        return user
    }

}