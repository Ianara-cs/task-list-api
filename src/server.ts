import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { routes } from './routes';
import './shared/container';

const app = express()

app.use(express.json())

app.use(routes)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({messege: "OK!"})
})

const port = 3000
app.listen(port, () => {
    console.log("Servidor rodando!🛸")
})