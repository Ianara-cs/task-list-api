import { Router } from "express";
import { ensureAutheticated } from "../middlewares/ensureAuthenticated";
import { ChangeStatusController } from "../modules/tasks/useCases/changeStatus/changeStatusController";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/createTaskController";
import { DeleteTaskController } from "../modules/tasks/useCases/deleteTask/deleteTaskController";
import { GetTaskController } from "../modules/tasks/useCases/getTask/getTaskController";
import { ListTasksController } from "../modules/tasks/useCases/listTasks/listTaskController";
import { UpdateTaskController } from "../modules/tasks/useCases/updateTask/updateTaskController";

const tasksRoutes = Router()

const listTasksController = new ListTasksController()
const createTaskController = new CreateTaskController()
const deleteTaskController = new DeleteTaskController()
const updateTakController = new UpdateTaskController()
const changeStatusController = new ChangeStatusController()
const getTaskController = new GetTaskController()

tasksRoutes.use(ensureAutheticated)
tasksRoutes.get('/', listTasksController.handle)
tasksRoutes.post('/', createTaskController.handle)
tasksRoutes.get('/:taskId', getTaskController.handle)
tasksRoutes.delete('/:taskId', deleteTaskController.handle)
tasksRoutes.put('/:taskId', updateTakController.handle)
tasksRoutes.patch('/:taskId', changeStatusController.handle)

export { tasksRoutes };

