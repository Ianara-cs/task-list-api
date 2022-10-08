import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
export class ListTasksUserCase {
    constructor(
        @inject("TasksRepository")
        private tasksRepository : ITasksRepository
    ) {}

    async execute(userId: string) {
        const tasks = await this.tasksRepository.findAll(userId)
        return tasks
    }
}