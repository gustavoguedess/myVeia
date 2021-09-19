import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

export enum UserTipo_ala {
    MASCULINA = "Masculina",
    FEMININA = "Feminina",
}
export enum UserTipo {
    MORADOR = "Morador",
    EXMORADOR = "Exmorador",
    ADMIN = "admin",
}
@Entity("usuarios")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @CreateDateColumn()
    data_nasc: Date;

    @Column()
    documento: string;

    /*
    foto1: 
    foto2:
    foto3:
    */
    @Column({ default: "Masculina" })
    tipo_ala: string;

    @Column({ default: "Veterano" })
    tipo: string;

    @Column({ type: 'boolean', default: false })
    tem_veia: boolean;

    @Column({ default: "" })
    descricao: string;

    @Column({ default: "" })
    whatsapp: string;

    @Column({ default: "Morador" })
    permissao: string;

    @CreateDateColumn()
    criado_em: Date;

    @CreateDateColumn()
    ultimo_login: Date;

    @Column({ type: 'boolean', default: false })
    ativo: boolean;
    
    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { User };
