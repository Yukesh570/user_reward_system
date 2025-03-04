import { MigrationInterface, QueryRunner } from "typeorm";

export class Newmigrations1740997659732 implements MigrationInterface {
    name = 'Newmigrations1740997659732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "reward" DROP CONSTRAINT "FK_7b3e48d8a28c1d1422f19c60752"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log" DROP COLUMN "prizeType"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."reward_log_prizetype_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log" DROP COLUMN "meterReadingDate"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward" DROP COLUMN "email"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward" DROP CONSTRAINT "UQ_7b3e48d8a28c1d1422f19c60752"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward" DROP COLUMN "userId"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward" DROP COLUMN "rewardType"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."reward_rewardtype_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward" DROP COLUMN "amount"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "userId" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log"
            ADD "rewardId" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log"
            ADD "EvaluationDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."reward_criteriatype_enum" AS ENUM('consistentUser', 'timelyPay')
        `);
        await queryRunner.query(`
            ALTER TABLE "reward"
            ADD "criteriaType" "public"."reward_criteriatype_enum" NOT NULL
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."reward_prizetype_enum" AS ENUM('discount', 'credit', 'cashback')
        `);
        await queryRunner.query(`
            ALTER TABLE "reward"
            ADD "prizeType" "public"."reward_prizetype_enum" NOT NULL
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."login_usertype_enum" AS ENUM('admin', 'customer')
        `);
        await queryRunner.query(`
            ALTER TABLE "login"
            ADD "userType" "public"."login_usertype_enum" NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_d72ea127f30e21753c9e229891e" FOREIGN KEY ("userId") REFERENCES "login"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log"
            ADD CONSTRAINT "FK_2ee0624de56a3275037b5ae0487" FOREIGN KEY ("rewardId") REFERENCES "reward"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "reward_log" DROP CONSTRAINT "FK_2ee0624de56a3275037b5ae0487"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_d72ea127f30e21753c9e229891e"
        `);
        await queryRunner.query(`
            ALTER TABLE "login" DROP COLUMN "userType"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."login_usertype_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward" DROP COLUMN "prizeType"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."reward_prizetype_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward" DROP COLUMN "criteriaType"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."reward_criteriatype_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log" DROP COLUMN "EvaluationDate"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log" DROP COLUMN "rewardId"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "userId"
        `);
        await queryRunner.query(`
            ALTER TABLE "reward"
            ADD "amount" integer NOT NULL
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."reward_rewardtype_enum" AS ENUM('consistentUser', 'timelyPay')
        `);
        await queryRunner.query(`
            ALTER TABLE "reward"
            ADD "rewardType" "public"."reward_rewardtype_enum" NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "reward"
            ADD "userId" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "reward"
            ADD CONSTRAINT "UQ_7b3e48d8a28c1d1422f19c60752" UNIQUE ("userId")
        `);
        await queryRunner.query(`
            ALTER TABLE "reward"
            ADD "email" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log"
            ADD "meterReadingDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."reward_log_prizetype_enum" AS ENUM('discount', 'credit', 'cashback')
        `);
        await queryRunner.query(`
            ALTER TABLE "reward_log"
            ADD "prizeType" "public"."reward_log_prizetype_enum" NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "reward"
            ADD CONSTRAINT "FK_7b3e48d8a28c1d1422f19c60752" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
