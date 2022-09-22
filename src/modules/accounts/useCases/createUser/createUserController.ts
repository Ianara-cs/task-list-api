import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const {name, email, password} = req.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        createUserUseCase.execute({name, password, email})

        return res.status(201).send()
    }
}