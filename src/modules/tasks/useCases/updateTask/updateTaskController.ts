import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTaskUseCase } from "./updateTaskUseCase";

export class UpdateTaskController {
    async handle (req: Request, res: Response) {
        const {title, description} = req.body
        const {taskId} = req.params
        const {id} = req.user

        const updateTaskUseCase = container.resolve(UpdateTaskUseCase)

        const updatedTask = await updateTaskUseCase.execute(id, {title, description, taskId})

        return res.status(200).json(updatedTask)
    }
}