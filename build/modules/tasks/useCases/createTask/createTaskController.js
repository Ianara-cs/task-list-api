"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
const tsyringe_1 = require("tsyringe");
const createTaskUseCase_1 = require("./createTaskUseCase");
class CreateTaskController {
    async handle(req, res) {
        const { title, description } = req.body;
        const { id } = req.user;
        const createTaskUseCase = tsyringe_1.container.resolve(createTaskUseCase_1.CreateTaskUseCase);
        createTaskUseCase.execute({ title, description, userId: id });
        return res.status(201).send();
    }
}
exports.CreateTaskController = CreateTaskController;
