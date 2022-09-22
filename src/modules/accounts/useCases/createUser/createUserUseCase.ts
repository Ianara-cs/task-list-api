import { hash } from 'bcrypt';
import { inject } from 'tsyringe';
import { ICreateUsersDTOs } from '../../dtos/ICreateUserDTOs';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class CreateUserUseCase {
    constructor (
        @inject('UsersRepository')
        private userRepository: IUsersRepository
    ) {}

    async execute ({name, email, password}: ICreateUsersDTOs) {
        const userAlreadyExist = await this.userRepository.findByEmail(email)

        if(userAlreadyExist) {
            throw new Error('Usuário já existe!')
        }

        const passwordHash = await hash(password, 8)

        this.userRepository.create({
            name,
            email,
            password: passwordHash
        })
    }
}