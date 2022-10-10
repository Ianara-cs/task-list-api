import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
export class ChangeStatusUseCase {
    constructor (
        @inject("TasksRepository")
        private tasksRepository : ITasksRepository
    ) {}

    async execute(userId: string, taskId: string, status: Status) {
        const task = await this.tasksRepository.findById(taskId)

        if(!task) {
            throw new AppError('Tarefa não encontrada')
        }

        if(task.accountId != userId) {
            throw new AppError('Ação impossível')
        }

        const statusChanged = await this.tasksRepository.updateStatus(taskId, status)
        return statusChanged
    }
}