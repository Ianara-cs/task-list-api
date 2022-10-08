import { Router } from "express";
import { ensureAutheticated } from "../middlewares/ensureAuthenticated";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/createTaskController";

const tasksRoutes = Router()

const createUserController = new CreateTaskController()

tasksRoutes.use(ensureAutheticated)
tasksRoutes.post('/', createUserController.handle)

export { tasksRoutes };

