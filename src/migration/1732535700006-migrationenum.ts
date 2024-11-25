import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrationenum1732535700006 implements MigrationInterface {
    name = 'Migrationenum1732535700006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
        await queryRunner.query(`CREATE TYPE "public"."reward_log_prizetype_enum" AS ENUM('discount', 'credit', 'cashback')`);
        await queryRunner.query(`ALTER TABLE "reward_log" ADD "prizeType" "public"."reward_log_prizetype_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reward_log" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "reward_log" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_log_prizetype_enum" AS ENUM('OnlinePayment', 'Cash')`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "prizeType" "public"."transaction_log_prizetype_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`CREATE TYPE "public"."reward_rewardtype_enum" AS ENUM('consistentUser', 'timelyPay')`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "rewardType" "public"."reward_rewardtype_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "rewardType"`);
        await queryRunner.query(`DROP TYPE "public"."reward_rewardtype_enum"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "prizeType"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_log_prizetype_enum"`);
        await queryRunner.query(`ALTER TABLE "reward_log" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "reward_log" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "reward_log" DROP COLUMN "prizeType"`);
        await queryRunner.query(`DROP TYPE "public"."reward_log_prizetype_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "type" character varying NOT NULL`);
    }

}
