import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration111737699549954 implements MigrationInterface {
    name = 'Migration111737699549954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" RENAME COLUMN "Amount" TO "amount"`);
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "amount" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "amount" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reward" RENAME COLUMN "amount" TO "Amount"`);
    }

}
