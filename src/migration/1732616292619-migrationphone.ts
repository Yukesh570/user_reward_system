import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrationphone1732616292619 implements MigrationInterface {
    name = 'Migrationphone1732616292619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reward_log" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "reward_log" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward_log" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "reward_log" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" integer NOT NULL`);
    }

}
