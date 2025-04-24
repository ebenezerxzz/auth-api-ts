import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumnUserEntity1745522325662 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("user", "passowrd", "password");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("user", "password", "passowrd");
    }
}
