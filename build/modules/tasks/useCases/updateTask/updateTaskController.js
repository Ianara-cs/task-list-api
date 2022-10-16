"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskController = void 0;
const tsyringe_1 = require("tsyringe");
const updateTaskUseCase_1 = require("./updateTaskUseCase");
class UpdateTaskController {
    async handle(req, res) {
        const { title, description } = req.body;
        const { taskId } = req.params;
        const { id } = req.user;
        const updateTaskUseCase = tsyringe_1.container.resolve(updateTaskUseCase_1.UpdateTaskUseCase);
        const updatedTask = await updateTaskUseCase.execute(id, { title, description, taskId });
        return res.status(200).json(updatedTask);
    }
}
exports.UpdateTaskController = UpdateTaskController;
