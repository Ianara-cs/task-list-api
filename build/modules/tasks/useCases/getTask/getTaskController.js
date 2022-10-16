"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTaskController = void 0;
const tsyringe_1 = require("tsyringe");
const getTaskUseCase_1 = require("./getTaskUseCase");
class GetTaskController {
    async handle(req, res) {
        const { taskId } = req.body;
        const { id } = req.user;
        const getTaskUseCase = tsyringe_1.container.resolve(getTaskUseCase_1.GetTaskUseCase);
        const task = await getTaskUseCase.execute(taskId, id);
        return res.status(200).json(task);
    }
}
exports.GetTaskController = GetTaskController;
