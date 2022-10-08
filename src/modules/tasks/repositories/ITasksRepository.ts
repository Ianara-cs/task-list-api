//import { Status } from "@prisma/client";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";
import { IUpdateTaskDTO } from "../dtos/IUpdateTaskDTO";
import { Task } from "../entities/Task";

export interface ITasksRepository {
    create(data: ICreateTaskDTO): Promise<void>
    findById(id: string): Promise<Task>
    update(data: IUpdateTaskDTO): Promise<Task>
    remove(id: string): Promise<Task>
    findAll(userId: string): Promise<Task[]>
    updateSatus(id: string, status: Status): Promise<Task>
}