import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    nome: string;
    documento: string;
    data_nasc: string;
}

class CreateUserService {
    async execute ( { nome, documento, data_nasc } : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!documento){
            throw new Error("Documento incorreto!")
        }
        if (!data_nasc){
            throw new Error("Data de nascimento inválido!")
        }

        const userAlreadyExists = await usersRepository.findOne({
            documento
        });

        if (userAlreadyExists) {
            throw new Error("Usuário já existe");
        }

        const user = usersRepository.createAndSave(
            nome,
            documento,
            data_nasc
        )

        return user
    }
}

export { CreateUserService }