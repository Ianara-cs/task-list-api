import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticationUseCase } from "./authenticationUseCase";

export class AutheticationController {
    async handle(req: Request, res: Response) {
        const {email, password} = req.body

        const authenticationUseCase = container.resolve(AuthenticationUseCase)

        const token = await authenticationUseCase.execute(email, password)

        return res.json(token)
    }
}

