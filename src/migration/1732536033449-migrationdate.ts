import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrationdate1732536033449 implements MigrationInterface {
    name = 'Migrationdate1732536033449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward_log" ADD "meterReadingDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "reward_log" ADD "paymentDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward_log" DROP COLUMN "paymentDate"`);
        await queryRunner.query(`ALTER TABLE "reward_log" DROP COLUMN "meterReadingDate"`);
    }

}
