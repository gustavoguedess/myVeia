import {EntityRepository, Repository} from "typeorm";
import { User } from "../entities/User";


@EntityRepository(User)
class UsersRepositories extends Repository<User>{
    createAndSave(nome: string, documento: string, data_nasc: string) {
        var data = data_nasc.split("/");
        const data_nasc_timestamp = new Date(data[2]+"-"+data[1]+"-"+data[0]);

        const user = new User();
        user.nome = nome;
        user.documento = documento;
        user.data_nasc = data_nasc_timestamp;
        console.log("tá funcionando até aqui!");
        console.log(user);
        return this.manager.save(user);
    }
    
}

export { UsersRepositories }