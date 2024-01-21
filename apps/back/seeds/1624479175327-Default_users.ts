import { MigrationInterface, QueryRunner } from 'typeorm';

import { Role } from '@hb/types';

const users = [
  { name: 'admin', role: Role.Admin },
  { name: 'user', role: Role.User },
];

// 1234567890
const simplePass =
  '$2b$10$rXVvWePRLYmT46Cthg4BT.FnP01SVASb0Me51mLmy1E7sHcz4scHC';

export class DefaultUsers1624479175327 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      users.map(async ({ name, role }) => {
        await queryRunner.query(
          `INSERT INTO "users" (name, email, password, role) VALUES ('${name}', '${name}@example.com', '${simplePass}', ${role})`,
        );
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      users.map(async ({ name }) => {
        await queryRunner.query(
          `DELETE FROM "users" WHERE email='${name}@example.com'`,
        );
      }),
    );
  }
}
