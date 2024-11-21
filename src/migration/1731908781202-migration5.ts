import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration51731908781202 implements MigrationInterface {
    name = 'Migration51731908781202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "reward" ADD CONSTRAINT "FK_7b3e48d8a28c1d1422f19c60752" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" DROP CONSTRAINT "FK_7b3e48d8a28c1d1422f19c60752"`);
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "userId"`);
    }

}
