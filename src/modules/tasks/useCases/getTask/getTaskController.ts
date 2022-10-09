import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetTaskUseCase } from "./getTaskUseCase";

export class GetTaskController {
    async handle(req: Request, res: Response) {
        const {taskId} = req.body
        const {id} = req.user

        const getTaskUseCase = container.resolve(GetTaskUseCase)

        const task = await getTaskUseCase.execute(taskId, id)

        return res.status(200).json(task)
    }
}