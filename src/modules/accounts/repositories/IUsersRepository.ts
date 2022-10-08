import { ICreateUsersDTOs } from "../dtos/ICreateUserDTOs";
import { User } from "../entities/User";

export interface IUsersRepository {
    create(data: ICreateUsersDTOs): Promise <void>
    findByEmail (email: string): Promise<User | null>
    findById (id: string): Promise<User>
}