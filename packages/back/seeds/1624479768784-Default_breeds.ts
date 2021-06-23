import { MigrationInterface, QueryRunner } from 'typeorm';

import { BreedGroupEntity } from '@/clients/entities';

const groups = [
  {
    name: 'Пастушьи и скотогонные собаки, кроме швейцарских скотогонных собак',
    fci: 1,
  },
  {
    name: 'Пинчеры и шнауцеры, молоссы, горные и швейцарские скотогонные собаки',
    fci: 2,
  },
  { name: 'Терьеры', fci: 3 },
  { name: 'Таксы', fci: 4 },
  { name: 'Шпицы и породы примитивного типа', fci: 5 },
  { name: 'Гончие, гончие по кровяному следу и родственные породы', fci: 6 },
  { name: 'Легавые', fci: 7 },
  { name: 'Ретриверы, спаниели, водяные собаки', fci: 8 },
  { name: 'Собаки-компаньоны', fci: 9 },
  { name: 'Борзые', fci: 10 },
];

const breeds = [
  { name: 'Далматин', fci: 153, group: 6 },
  { name: 'Бигль', fci: 161, group: 6 },
];

export class DefaultBreeds1624479768784 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      groups.map(async ({ name, fci = null }) => {
        await queryRunner.query(
          `INSERT INTO "breed-groups" (name, fci) VALUES ('${name}', ${fci})`,
        );
      }),
    );

    await Promise.all(
      breeds.map(async ({ name, fci = null, group = null }) => {
        let groupId = null;

        if (group) {
          const foundGroup = await queryRunner.manager
            .getRepository(BreedGroupEntity)
            .createQueryBuilder('group')
            .where('group.fci = :fci', { fci: group })
            .getOne();

          if (foundGroup) groupId = foundGroup.id;
        }

        await queryRunner.query(
          `INSERT INTO "breeds" (name, fci, "groupId") VALUES ('${name}', ${fci}, ${groupId})`,
        );
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      breeds.map(async ({ name }) => {
        await queryRunner.query(`DELETE FROM "breeds" WHERE name='${name}'`);
      }),
    );

    await Promise.all(
      groups.map(async ({ name }) => {
        await queryRunner.query(
          `DELETE FROM "breed-groups" WHERE name='${name}'`,
        );
      }),
    );
  }
}
