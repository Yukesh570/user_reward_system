import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrationunizue1739944655822 implements MigrationInterface {
    name = 'Migrationunizue1739944655822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "login"
            ADD CONSTRAINT "UQ_c9db456a9dca0e6e45d16669e9a" UNIQUE ("username")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "login" DROP CONSTRAINT "UQ_c9db456a9dca0e6e45d16669e9a"
        `);
    }

}
