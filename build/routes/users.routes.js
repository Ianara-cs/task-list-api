"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const authenticationController_1 = require("../modules/accounts/useCases/authentication/authenticationController");
const createUserController_1 = require("../modules/accounts/useCases/createUser/createUserController");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
const createUserController = new createUserController_1.CreateUserController();
const autheticationController = new authenticationController_1.AutheticationController();
usersRoutes.post('/', createUserController.handle);
usersRoutes.post('/auth', autheticationController.handle);
