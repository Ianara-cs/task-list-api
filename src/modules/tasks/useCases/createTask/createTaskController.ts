import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTaskUseCase } from "./createTaskUseCase";

export class CreateTaskController {
    async handle (req: Request, res: Response) {
        const {title, description} = req.body
        const {id} = req.user

        const createTaskUseCase = container.resolve(CreateTaskUseCase)

        createTaskUseCase.execute({title, description, userId: id})

        return res.status(201).send()
    }
}