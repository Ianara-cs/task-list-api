"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UsersRepository_1 = require("../../modules/accounts/repositories/implementations/UsersRepository");
const TasksRepository_1 = require("../../modules/tasks/repositories/implementations/TasksRepository");
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton("TasksRepository", TasksRepository_1.TasksRepository);
