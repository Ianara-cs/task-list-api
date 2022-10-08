import { Router } from "express";
import { AutheticationController } from "../modules/accounts/useCases/authentication/authenticationController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/createUserController";

const usersRoutes = Router()

const createUserController = new CreateUserController()
const autheticationController = new AutheticationController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.post('/auth', autheticationController.handle )


export { usersRoutes };

