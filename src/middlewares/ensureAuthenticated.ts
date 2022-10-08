import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { verifyToken } from "../util/jwt";

interface IPayload {
    userId: string
    email: string
}

export async function ensureAutheticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(' ')

    try {
        const {userId} = verifyToken(token) as IPayload
        
        const usersRepository = new UsersRepository()
        const user = usersRepository.findById(userId)

        if(!user) {
            throw new Error("User does not exists!")
        }


        req.user = {
            id: userId
        }
        
        next()
    } catch (error) {
        throw new Error("Invalid token!")
    }

}