import { inject, injectable } from "tsyringe"
import { ITasksRepository } from "../../repositories/ITasksRepository"

@injectable()
export class GetTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private tasksRepository : ITasksRepository
    ) {}

    async execute(taskId: string, userId: string) {
        const task = await this.tasksRepository.findById(taskId)

        if(!task) {
            throw new Error("Tarefa não encontrada")
        }

        if(task.accountId != userId) {
            throw new Error('Ação impossível')
        }

        return task
    }
}