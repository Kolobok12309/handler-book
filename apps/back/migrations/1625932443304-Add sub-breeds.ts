import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSubBreeds1625932443304 implements MigrationInterface {
    name = 'AddSubBreeds1625932443304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sub-breeds" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "breedId" integer, CONSTRAINT "PK_0a12ebbf7d20503c67c5c2faa39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sub-breeds" ADD CONSTRAINT "FK_f8f16b3a17d508eb34e9183e251" FOREIGN KEY ("breedId") REFERENCES "breeds"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sub-breeds" DROP CONSTRAINT "FK_f8f16b3a17d508eb34e9183e251"`);
        await queryRunner.query(`DROP TABLE "sub-breeds"`);
    }

}
