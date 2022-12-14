"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRoutes = void 0;
const express_1 = require("express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const changeStatusController_1 = require("../modules/tasks/useCases/changeStatus/changeStatusController");
const createTaskController_1 = require("../modules/tasks/useCases/createTask/createTaskController");
const deleteTaskController_1 = require("../modules/tasks/useCases/deleteTask/deleteTaskController");
const getTaskController_1 = require("../modules/tasks/useCases/getTask/getTaskController");
const listTaskController_1 = require("../modules/tasks/useCases/listTasks/listTaskController");
const updateTaskController_1 = require("../modules/tasks/useCases/updateTask/updateTaskController");
const tasksRoutes = (0, express_1.Router)();
exports.tasksRoutes = tasksRoutes;
const listTasksController = new listTaskController_1.ListTasksController();
const createTaskController = new createTaskController_1.CreateTaskController();
const deleteTaskController = new deleteTaskController_1.DeleteTaskController();
const updateTakController = new updateTaskController_1.UpdateTaskController();
const changeStatusController = new changeStatusController_1.ChangeStatusController();
const getTaskController = new getTaskController_1.GetTaskController();
tasksRoutes.use(ensureAuthenticated_1.ensureAutheticated);
tasksRoutes.get('/', listTasksController.handle);
tasksRoutes.post('/', createTaskController.handle);
tasksRoutes.get('/:taskId', getTaskController.handle);
tasksRoutes.delete('/:taskId', deleteTaskController.handle);
tasksRoutes.put('/:taskId', updateTakController.handle);
tasksRoutes.patch('/:taskId', changeStatusController.handle);
