"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutheticationController = void 0;
const tsyringe_1 = require("tsyringe");
const authenticationUseCase_1 = require("./authenticationUseCase");
class AutheticationController {
    async handle(req, res) {
        const { email, password } = req.body;
        const authenticationUseCase = tsyringe_1.container.resolve(authenticationUseCase_1.AuthenticationUseCase);
        const token = await authenticationUseCase.execute(email, password);
        return res.json(token);
    }
}
exports.AutheticationController = AutheticationController;
