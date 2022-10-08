import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTasksUserCase } from "./listTasksUseCase";

export class ListTasksController {
    async handle(req: Request, res: Response) {
        const {id} = req.user
        const listTasksUseCase = container.resolve(ListTasksUserCase)

        const tasks = await listTasksUseCase.execute(id)

        return res.status(200).json(tasks)
    }
}