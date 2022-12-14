"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const tasks_routes_1 = require("./tasks.routes");
const users_routes_1 = require("./users.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/users', users_routes_1.usersRoutes);
routes.use('/tasks', tasks_routes_1.tasksRoutes);
