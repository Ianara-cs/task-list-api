import { Request, Response } from "express";
import { container } from "tsyringe";
import { ChangeStatusUseCase } from "./changeStatusUseCase";

export class ChangeStatusController {
    async handle(req: Request, res: Response) {
        const {status} = req.body
        const {taskId} = req.params
        const {id} = req.user

        const changeStatusUseCase = container.resolve(ChangeStatusUseCase)

        const statusChanged = await changeStatusUseCase.execute(id, taskId, status)

        return res.status(200).json(statusChanged)
    }
}