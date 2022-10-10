import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
export class DeleteTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private tasksRepository : ITasksRepository,
    ) {}

    async execute(taskId: string, userId: string) {
        console.log(taskId)
        const task = await this.tasksRepository.findById(taskId)
        if(!task) {
            throw new AppError('Tarefa não encontrada')
        }

        console.log(userId, task.accountId)

        if(task.accountId != userId) {
            throw new AppError('Ação impossível')
        }

        const taskDeleted = await this.tasksRepository.remove(task.id as string)

        return taskDeleted
    }
}