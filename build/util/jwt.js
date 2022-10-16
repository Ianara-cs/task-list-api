"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("../config/auth"));
function generateToken(user) {
    return jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, auth_1.default.jwt_access_secret, {
        expiresIn: auth_1.default.expires_in_token,
    });
}
exports.generateToken = generateToken;
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, auth_1.default.jwt_access_secret);
}
exports.verifyToken = verifyToken;
