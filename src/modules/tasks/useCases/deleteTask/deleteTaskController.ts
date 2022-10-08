import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTaskUseCase } from "./deleteTaskUseCase";

export class DeleteTaskController {
    async handle(req: Request, res: Response) {
        const {taskId} = req.body
        const {id} = req.user

        const deleteTaskUseCase = container.resolve(DeleteTaskUseCase)

        const taskDeleted = await deleteTaskUseCase.execute(taskId, id)

        return res.status(200).json(taskDeleted)
    }
}

