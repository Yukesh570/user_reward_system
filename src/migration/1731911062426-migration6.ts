import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration61731911062426 implements MigrationInterface {
    name = 'Migration61731911062426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "rewardId" integer`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD "rewardLogId" integer`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD CONSTRAINT "FK_571a0a453fea805897b00fb1cc4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD CONSTRAINT "FK_bdff30577992f37d5f6200ec82a" FOREIGN KEY ("rewardId") REFERENCES "reward"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction_log" ADD CONSTRAINT "FK_b2e5e94dc3e3afaa4069d5ab897" FOREIGN KEY ("rewardLogId") REFERENCES "reward_log"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP CONSTRAINT "FK_b2e5e94dc3e3afaa4069d5ab897"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP CONSTRAINT "FK_bdff30577992f37d5f6200ec82a"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP CONSTRAINT "FK_571a0a453fea805897b00fb1cc4"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "rewardLogId"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "rewardId"`);
        await queryRunner.query(`ALTER TABLE "transaction_log" DROP COLUMN "userId"`);
    }

}
