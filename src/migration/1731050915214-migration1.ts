import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration11731050915214 implements MigrationInterface {
    name = 'Migration11731050915214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction_log" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "email" character varying NOT NULL, "Amount" integer NOT NULL, CONSTRAINT "PK_c31d1e77795e3bd9d5f6399f988" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reward_log" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" integer NOT NULL, CONSTRAINT "PK_fdc2a9818578178a29ec8a73868" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reward" ("id" SERIAL NOT NULL, "reward" character varying NOT NULL, "email" character varying NOT NULL, "Amount" integer NOT NULL, CONSTRAINT "PK_a90ea606c229e380fb341838036" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reward"`);
        await queryRunner.query(`DROP TABLE "reward_log"`);
        await queryRunner.query(`DROP TABLE "transaction_log"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
