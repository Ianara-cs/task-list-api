import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { generateToken } from "../../../../util/jwt";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class AuthenticationUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute (email: string, password: string) {
        const user = await this.usersRepository.findByEmail(email)

        if(!user) {
            throw new Error('Email ou senha incorreto!')
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error('Email ou senha incorreto!')
        }

        const token = generateToken(user)

        const tokenReturn = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }

        return tokenReturn
    }
}