"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStatusController = void 0;
const tsyringe_1 = require("tsyringe");
const changeStatusUseCase_1 = require("./changeStatusUseCase");
class ChangeStatusController {
    async handle(req, res) {
        const { status } = req.body;
        const { taskId } = req.params;
        const { id } = req.user;
        const changeStatusUseCase = tsyringe_1.container.resolve(changeStatusUseCase_1.ChangeStatusUseCase);
        const statusChanged = await changeStatusUseCase.execute(id, taskId, status);
        return res.status(200).json(statusChanged);
    }
}
exports.ChangeStatusController = ChangeStatusController;
