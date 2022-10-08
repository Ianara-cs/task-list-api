import { inject, injectable } from "tsyringe";
import { IUpdateTaskDTO } from "../../dtos/IUpdateTaskDTO";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
export class UpdateTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private tasksRepository : ITasksRepository
    ) {}

    async execute(userId: string, {title, description, taskId}: IUpdateTaskDTO) {
        const task = await this.tasksRepository.findById(taskId)

        if(!task) {
            throw new Error("Tarefa não encontrada")
        }

        if(task.accountId != userId) {
            throw new Error('Ação impossível')
        }

        if(!title) {
            title = task.title
        }

        if(!description) {
            description = task.description
        }

        const updatedTask = await this.tasksRepository.update({title, description, taskId})
        return updatedTask
    }
}