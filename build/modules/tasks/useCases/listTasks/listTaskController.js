"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksController = void 0;
const tsyringe_1 = require("tsyringe");
const listTasksUseCase_1 = require("./listTasksUseCase");
class ListTasksController {
    async handle(req, res) {
        const { id } = req.user;
        const listTasksUseCase = tsyringe_1.container.resolve(listTasksUseCase_1.ListTasksUserCase);
        const tasks = await listTasksUseCase.execute(id);
        return res.status(200).json(tasks);
    }
}
exports.ListTasksController = ListTasksController;
