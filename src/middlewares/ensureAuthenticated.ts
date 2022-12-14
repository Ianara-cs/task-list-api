import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { verifyToken } from "../util/jwt";

interface IPayload {
    userId: string
    email: string
}

export async function ensureAutheticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(' ')

    try {
        const {userId} = verifyToken(token) as IPayload
        
        const usersRepository = new UsersRepository()
        const user = usersRepository.findById(userId)

        if(!user) {
            throw new AppError("User does not exists!", 401)
        }


        req.user = {
            id: userId
        }
        
        next()
    } catch (error) {
        throw new AppError("Invalid token!",401)
    }

}