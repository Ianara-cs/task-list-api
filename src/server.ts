import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { PORT } from './config/config';
import { AppError } from './errors/AppError';
import { routes } from './routes';
import './shared/container';

const app = express()

app.use(express.json())

app.use(routes)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({messege: "OK!"})
})

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(PORT, () => {
    console.log("Servidor rodando!🛸")
})