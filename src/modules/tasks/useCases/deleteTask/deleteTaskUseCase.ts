import { inject, injectable } from "tsyringe";
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
            throw new Error('Tarefa não encontrada')
        }

        console.log(userId, task.accountId)

        if(task.accountId != userId) {
            throw new Error('Ação impossível')
        }

        const taskDeleted = undefined//await this.tasksRepository.remove(task.id as string)

        return taskDeleted
    }
}