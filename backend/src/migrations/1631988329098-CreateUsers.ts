import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1631988329098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "data_nasc",
                        type: "timestamp"
                    },
                    {
                        name: "documento",
                        type: "varchar"
                    },
                    {
                        name: "foto1",
                        type: "blob"
                    },
                    {
                        name: "foto2",
                        type: "blob"
                    },
                    {
                        name: "foto3",
                        type: "blob"
                    },
                    {
                        name: "tipo_ala",
                        type: "varchar"
                    },
                    {
                        name: "tipo_morador",
                        type: "varchar"
                    },
                    {
                        name: "tem_veia",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "whatsapp",
                        type: "varchar",
                    },
                    {
                        name: "permissao",
                        type: "varchar"
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "ultimo_login",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "ativo",
                        type: "boolean",
                        default: false
                    }
                ]
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }

}
