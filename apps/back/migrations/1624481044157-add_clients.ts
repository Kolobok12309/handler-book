import {MigrationInterface, QueryRunner} from "typeorm";

export class addClients1624481044157 implements MigrationInterface {
    name = 'addClients1624481044157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "breeds" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "fci" integer, "groupId" integer, CONSTRAINT "UQ_e095f65adf02981d1fffcef932c" UNIQUE ("fci"), CONSTRAINT "PK_e89f6e1fbb29d28623b4feb2b3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "breed-groups" ("id" SERIAL NOT NULL, "fci" integer, "name" character varying NOT NULL, CONSTRAINT "UQ_6adafe892f42e5d061a90b0a26b" UNIQUE ("fci"), CONSTRAINT "PK_47edbf6d14dd8df4422676faf8d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "persons" ("id" SERIAL NOT NULL, "isClient" boolean NOT NULL DEFAULT false, "isJudge" boolean NOT NULL DEFAULT false, "isBreeder" boolean NOT NULL DEFAULT false, "fullname" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "email" character varying NOT NULL DEFAULT '', "phone" character varying NOT NULL DEFAULT '', "handlerId" integer, CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dogs" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "color" character varying NOT NULL DEFAULT '', "description" character varying NOT NULL DEFAULT '', "sex" smallint NOT NULL, "weight" double precision, "breedId" integer, "breederId" integer, "ownerId" integer, "handlerId" integer, CONSTRAINT "PK_c0911b1d44db6cdd303c6d6afc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dogs_files_files" ("dogsId" integer NOT NULL, "filesId" integer NOT NULL, CONSTRAINT "PK_d7aa7e9defa399978d8b40fb4e7" PRIMARY KEY ("dogsId", "filesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_162e58e98c8d2bd9f8cf45f6e5" ON "dogs_files_files" ("dogsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_73f7517520d523ca52bcf28c0a" ON "dogs_files_files" ("filesId") `);
        await queryRunner.query(`ALTER TABLE "breeds" ADD CONSTRAINT "FK_075785ebe67a90da0153e4fd862" FOREIGN KEY ("groupId") REFERENCES "breed-groups"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "FK_662d34e6e5f9f7958f699971971" FOREIGN KEY ("handlerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "FK_a3ebe321273a7dc6655d2eaaa70" FOREIGN KEY ("breedId") REFERENCES "breeds"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "FK_46f40856931c780bd8b98eccdd3" FOREIGN KEY ("breederId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "FK_1661fdbf2ed1ae0d748307e0e01" FOREIGN KEY ("ownerId") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "FK_567a96bafa5f0c517bba3cd5092" FOREIGN KEY ("handlerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dogs_files_files" ADD CONSTRAINT "FK_162e58e98c8d2bd9f8cf45f6e5f" FOREIGN KEY ("dogsId") REFERENCES "dogs"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "dogs_files_files" ADD CONSTRAINT "FK_73f7517520d523ca52bcf28c0a1" FOREIGN KEY ("filesId") REFERENCES "files"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dogs_files_files" DROP CONSTRAINT "FK_73f7517520d523ca52bcf28c0a1"`);
        await queryRunner.query(`ALTER TABLE "dogs_files_files" DROP CONSTRAINT "FK_162e58e98c8d2bd9f8cf45f6e5f"`);
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "FK_567a96bafa5f0c517bba3cd5092"`);
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "FK_1661fdbf2ed1ae0d748307e0e01"`);
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "FK_46f40856931c780bd8b98eccdd3"`);
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "FK_a3ebe321273a7dc6655d2eaaa70"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "FK_662d34e6e5f9f7958f699971971"`);
        await queryRunner.query(`ALTER TABLE "breeds" DROP CONSTRAINT "FK_075785ebe67a90da0153e4fd862"`);
        await queryRunner.query(`DROP INDEX "IDX_73f7517520d523ca52bcf28c0a"`);
        await queryRunner.query(`DROP INDEX "IDX_162e58e98c8d2bd9f8cf45f6e5"`);
        await queryRunner.query(`DROP TABLE "dogs_files_files"`);
        await queryRunner.query(`DROP TABLE "dogs"`);
        await queryRunner.query(`DROP TABLE "persons"`);
        await queryRunner.query(`DROP TABLE "breed-groups"`);
        await queryRunner.query(`DROP TABLE "breeds"`);
    }

}
