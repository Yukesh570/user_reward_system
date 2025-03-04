import { MigrationInterface, QueryRunner } from "typeorm";

export class Newdb1741069904390 implements MigrationInterface {
    name = 'Newdb1741069904390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "phone" character varying NOT NULL,
                "location" character varying NOT NULL,
                "userId" integer,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "reward_log" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "phone" character varying NOT NULL,
                "rewardId" integer,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "EvaluationDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "paymentDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                CONSTRAINT "PK_fdc2a9818578178a29ec8a73868" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."reward_criteriatype_enum" AS ENUM('consistentUser', 'timelyPay')
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."reward_prizetype_enum" AS ENUM('discount', 'credit', 'cashback')
        `);
        await queryRunner.query(`
            CREATE TABLE "reward" (
                "id" SERIAL NOT NULL,
                "reward" character varying NOT NULL,
                "criteriaType" "public"."reward_criteriatype_enum" NOT NULL,
                "prizeType" "public"."reward_prizetype_enum" NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a90ea606c229e380fb341838036" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."login_usertype_enum" AS ENUM('admin', 'customer')
        `);
        await queryRunner.query(`
            CREATE TABLE "login" (
                "id" SERIAL NOT NULL,
                "username" character varying NOT NULL,
                "password" character varying NOT NULL,
                "userType" "public"."login_usertype_enum" NOT NULL,
                CONSTRAINT "UQ_c9db456a9dca0e6e45d16669e9a" UNIQUE ("username"),
                CONSTRAINT "PK_0e29aa96b7d3fb812ff43fcfcd3" PRIMARY KEY ("id")
            )
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
            DROP TABLE "login"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."login_usertype_enum"
        `);
        await queryRunner.query(`
            DROP TABLE "reward"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."reward_prizetype_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."reward_criteriatype_enum"
        `);
        await queryRunner.query(`
            DROP TABLE "reward_log"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
