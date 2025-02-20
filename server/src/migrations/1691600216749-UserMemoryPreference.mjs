export class UserMemoryPreference1691600216749 {
  name = 'UserMemoryPreference1691600216749';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "users" ADD "memoriesEnabled" boolean NOT NULL DEFAULT true`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "memoriesEnabled"`);
  }
}
