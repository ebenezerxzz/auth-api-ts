import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

export class  $npmConfigFilename1745336053606 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        default: "UUID()",
                        generationStrategy: "increment"
                    },
                    {
                        name: "username",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "55",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "20",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "createdat",
                        type: "date",
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "12",
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
