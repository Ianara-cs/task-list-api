"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const createUserUseCase_1 = require("./createUserUseCase");
class CreateUserController {
    async handle(req, res) {
        const { name, email, password } = req.body;
        const createUserUseCase = tsyringe_1.container.resolve(createUserUseCase_1.CreateUserUseCase);
        createUserUseCase.execute({ name, password, email });
        return res.status(201).send();
    }
}
exports.CreateUserController = CreateUserController;
