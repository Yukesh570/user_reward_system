import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration21731051488191 implements MigrationInterface {
    name = 'Migration21731051488191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "location" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "typeoftransaction" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "typeoftransaction"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "location"`);
    }

}
