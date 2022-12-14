"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const tsyringe_1 = require("tsyringe");
const jwt_1 = require("../../../../util/jwt");
let AuthenticationUseCase = class AuthenticationUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(email, password) {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new Error('Email ou senha incorreto!');
        }
        const passwordMatch = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error('Email ou senha incorreto!');
        }
        const token = (0, jwt_1.generateToken)(user);
        const tokenReturn = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        };
        return tokenReturn;
    }
};
AuthenticationUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UsersRepository')),
    __metadata("design:paramtypes", [Object])
], AuthenticationUseCase);
exports.AuthenticationUseCase = AuthenticationUseCase;
