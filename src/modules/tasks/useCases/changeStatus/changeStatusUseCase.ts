import { inject, injectable } from "tsyringe";
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
            throw new Error('Tarefa não encontrada')
        }

        if(task.accountId != userId) {
            throw new Error('Ação impossível')
        }

        const statusChanged = await this.tasksRepository.updateSatus(taskId, status)
        return statusChanged
    }
}