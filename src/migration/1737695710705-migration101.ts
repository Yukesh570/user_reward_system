import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1011737695710705 implements MigrationInterface {
    name = 'Migration1011737695710705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" DROP CONSTRAINT "FK_7b3e48d8a28c1d1422f19c60752"`);
        await queryRunner.query(`ALTER TABLE "reward" ADD CONSTRAINT "UQ_7b3e48d8a28c1d1422f19c60752" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "reward" ADD CONSTRAINT "FK_7b3e48d8a28c1d1422f19c60752" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" DROP CONSTRAINT "FK_7b3e48d8a28c1d1422f19c60752"`);
        await queryRunner.query(`ALTER TABLE "reward" DROP CONSTRAINT "UQ_7b3e48d8a28c1d1422f19c60752"`);
        await queryRunner.query(`ALTER TABLE "reward" ADD CONSTRAINT "FK_7b3e48d8a28c1d1422f19c60752" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
