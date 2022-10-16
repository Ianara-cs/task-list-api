"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAutheticated = void 0;
const AppError_1 = require("../errors/AppError");
const UsersRepository_1 = require("../modules/accounts/repositories/implementations/UsersRepository");
const jwt_1 = require("../util/jwt");
async function ensureAutheticated(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.AppError("Token missing", 401);
    }
    const [, token] = authHeader.split(' ');
    try {
        const { userId } = (0, jwt_1.verifyToken)(token);
        const usersRepository = new UsersRepository_1.UsersRepository();
        const user = usersRepository.findById(userId);
        if (!user) {
            throw new AppError_1.AppError("User does not exists!", 401);
        }
        req.user = {
            id: userId
        };
        next();
    }
    catch (error) {
        throw new AppError_1.AppError("Invalid token!", 401);
    }
}
exports.ensureAutheticated = ensureAutheticated;
