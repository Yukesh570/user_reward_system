import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrationvarchar1732623468062 implements MigrationInterface {
    name = 'Migrationvarchar1732623468062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "Amount"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "Amount" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "Amount"`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "Amount" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "Amount"`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "Amount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "Amount"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "Amount" integer NOT NULL`);
    }

}
