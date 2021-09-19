import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

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
    @Column()
    tipo_ala: string;

    @Column()
    tipo_morador: string;

    @Column()
    tem_veia: boolean;

    @Column()
    descricao: string;

    @Column()
    whatsapp: string;

    @Column()
    permissao: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    ultimo_login: Date;

    @Column()
    ativo: boolean;
    
    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { User };
