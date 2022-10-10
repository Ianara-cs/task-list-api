import { PrismaClient } from '@prisma/client';
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { IUpdateTaskDTO } from "../../dtos/IUpdateTaskDTO";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {
    private prisma
    constructor() {
        this.prisma = new PrismaClient()
    }
    async create({description, title, userId}: ICreateTaskDTO): Promise<void> {
        const task = await this.prisma.task.create({data: {
            title,
            description,
            accountId: userId
        }})
    }

    async findById(id: string): Promise<Task> {
        const task = await this.prisma.task.findUniqueOrThrow({where: {
            id
        }})

        return task
    }

    async findAll(userId: string): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany({
            where: {
                accountId: userId
            }
        })

        return tasks
    }

    async update({taskId, title, description}: IUpdateTaskDTO): Promise<Task> {
        const task = await this.prisma.task.update({where: {
            id: taskId
        }, 
        data: {
            title, 
            description
        }})

        return task
    }

    async updateStatus(id: string, status: Status): Promise<Task> {
        const task = await this.prisma.task.update({where: {
            id
        }, 
        data: {
            status: status
        }})

        return task
    }

    async remove(id: string): Promise<Task> {
        const deleteTask = await this.prisma.task.delete({
            where: {id}
        })

        return deleteTask
    }

}