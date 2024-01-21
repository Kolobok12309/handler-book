import {MigrationInterface, QueryRunner} from "typeorm";

export class addAvatarIdToDogAndUpdatePerson1629133006343 implements MigrationInterface {
    name = 'addAvatarIdToDogAndUpdatePerson1629133006343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persons_files_files" ("personsId" integer NOT NULL, "filesId" integer NOT NULL, CONSTRAINT "PK_d8df01b128764a18fba2e04e07c" PRIMARY KEY ("personsId", "filesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bfacb64f720b9f49bda6966979" ON "persons_files_files" ("personsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6bd6ebfd1c0dea87224333537c" ON "persons_files_files" ("filesId") `);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "isClient"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "isJudge"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "isBreeder"`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "avatarId" integer`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "UQ_2bf428d5e0bbeebf90e8218a1bc" UNIQUE ("avatarId")`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD "avatarId" integer`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "UQ_9c99c1c1756c93a41e9b089ebd2" UNIQUE ("avatarId")`);
        await queryRunner.query(`ALTER TABLE "breeds" DROP CONSTRAINT "FK_075785ebe67a90da0153e4fd862"`);
        await queryRunner.query(`ALTER TABLE "breeds" ALTER COLUMN "groupId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "FK_662d34e6e5f9f7958f699971971"`);
        await queryRunner.query(`ALTER TABLE "persons" ALTER COLUMN "handlerId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "breeds" ADD CONSTRAINT "FK_075785ebe67a90da0153e4fd862" FOREIGN KEY ("groupId") REFERENCES "breed-groups"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "FK_2bf428d5e0bbeebf90e8218a1bc" FOREIGN KEY ("avatarId") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "FK_662d34e6e5f9f7958f699971971" FOREIGN KEY ("handlerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "FK_9c99c1c1756c93a41e9b089ebd2" FOREIGN KEY ("avatarId") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "persons_files_files" ADD CONSTRAINT "FK_bfacb64f720b9f49bda69669799" FOREIGN KEY ("personsId") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "persons_files_files" ADD CONSTRAINT "FK_6bd6ebfd1c0dea87224333537c6" FOREIGN KEY ("filesId") REFERENCES "files"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persons_files_files" DROP CONSTRAINT "FK_6bd6ebfd1c0dea87224333537c6"`);
        await queryRunner.query(`ALTER TABLE "persons_files_files" DROP CONSTRAINT "FK_bfacb64f720b9f49bda69669799"`);
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "FK_9c99c1c1756c93a41e9b089ebd2"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "FK_662d34e6e5f9f7958f699971971"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "FK_2bf428d5e0bbeebf90e8218a1bc"`);
        await queryRunner.query(`ALTER TABLE "breeds" DROP CONSTRAINT "FK_075785ebe67a90da0153e4fd862"`);
        await queryRunner.query(`ALTER TABLE "persons" ALTER COLUMN "handlerId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "FK_662d34e6e5f9f7958f699971971" FOREIGN KEY ("handlerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "breeds" ALTER COLUMN "groupId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "breeds" ADD CONSTRAINT "FK_075785ebe67a90da0153e4fd862" FOREIGN KEY ("groupId") REFERENCES "breed-groups"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "UQ_9c99c1c1756c93a41e9b089ebd2"`);
        await queryRunner.query(`ALTER TABLE "dogs" DROP COLUMN "avatarId"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "UQ_2bf428d5e0bbeebf90e8218a1bc"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "avatarId"`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "isBreeder" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "isJudge" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "isClient" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`DROP INDEX "IDX_6bd6ebfd1c0dea87224333537c"`);
        await queryRunner.query(`DROP INDEX "IDX_bfacb64f720b9f49bda6966979"`);
        await queryRunner.query(`DROP TABLE "persons_files_files"`);
    }

}
