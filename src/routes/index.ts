import { Router } from "express";
import { tasksRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/tasks', tasksRoutes)

export { routes };

