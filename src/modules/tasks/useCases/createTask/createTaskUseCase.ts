import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { UsersRepository } from "../../../accounts/repositories/implementations/UsersRepository";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
export class CreateTaskUseCase {
    constructor (
        @inject("TasksRepository")
        private tasksRepository : ITasksRepository
    ) {}

    async execute({title, description, userId}: ICreateTaskDTO) {
        const userRepository = new UsersRepository()

        const user = await userRepository.findById(userId)
        
        if(!user) {
            throw new AppError("Usuario não encontra")
        }
        
        await this.tasksRepository.create({title, description, userId: user.id as string})
    }
}