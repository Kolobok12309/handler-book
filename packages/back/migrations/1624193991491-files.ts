import {MigrationInterface, QueryRunner} from "typeorm";

export class files1624193991491 implements MigrationInterface {
    name = 'files1624193991491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "files" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" text NOT NULL DEFAULT 'etc', "key" character varying NOT NULL, "url" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "uploadedById" integer, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "files" ADD CONSTRAINT "FK_a525d85f0ac59aa9a971825e1af" FOREIGN KEY ("uploadedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "files" DROP CONSTRAINT "FK_a525d85f0ac59aa9a971825e1af"`);
        await queryRunner.query(`DROP TABLE "files"`);
    }

}
