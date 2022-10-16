"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskController = void 0;
const tsyringe_1 = require("tsyringe");
const deleteTaskUseCase_1 = require("./deleteTaskUseCase");
class DeleteTaskController {
    async handle(req, res) {
        const { taskId } = req.params;
        const { id } = req.user;
        const deleteTaskUseCase = tsyringe_1.container.resolve(deleteTaskUseCase_1.DeleteTaskUseCase);
        const taskDeleted = await deleteTaskUseCase.execute(taskId, id);
        return res.status(200).json(taskDeleted);
    }
}
exports.DeleteTaskController = DeleteTaskController;
