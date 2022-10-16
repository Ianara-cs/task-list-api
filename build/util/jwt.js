"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const server_1 = require("../server");
function generateToken(user) {
    return jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, (0, server_1.printEnv)(process.env.JWT_ACCESS_SECRET), {
        expiresIn: (0, server_1.printEnv)(process.env.EXPIRES_IN_TOKEN),
    });
}
exports.generateToken = generateToken;
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, (0, server_1.printEnv)(process.env.JWT_ACCESS_SECRET));
}
exports.verifyToken = verifyToken;
