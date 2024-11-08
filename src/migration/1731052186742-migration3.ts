import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration31731052186742 implements MigrationInterface {
    name = 'Migration31731052186742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "Geender"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "Geender" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" character varying NOT NULL`);
    }

}
