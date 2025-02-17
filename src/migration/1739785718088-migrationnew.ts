import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrationnew1739785718088 implements MigrationInterface {
    name = 'Migrationnew1739785718088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "typeoftransaction"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "prizeType"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_log_prizetype_enum"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "Amount"`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_log_transactiontype_enum" AS ENUM('OnlinePayment', 'Cash')`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "transactionType" "public"."transaction_log_transactiontype_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "amount" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP CONSTRAINT "FK_571a0a453fea805897b00fb1cc4"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD CONSTRAINT "UQ_571a0a453fea805897b00fb1cc4" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD CONSTRAINT "FK_571a0a453fea805897b00fb1cc4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP CONSTRAINT "FK_571a0a453fea805897b00fb1cc4"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP CONSTRAINT "UQ_571a0a453fea805897b00fb1cc4"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD CONSTRAINT "FK_571a0a453fea805897b00fb1cc4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "transactionType"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_log_transactiontype_enum"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "Amount" character varying NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_log_prizetype_enum" AS ENUM('OnlinePayment', 'Cash')`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "prizeType" "public"."transaction_log_prizetype_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "typeoftransaction" character varying NOT NULL`);
    }

}
