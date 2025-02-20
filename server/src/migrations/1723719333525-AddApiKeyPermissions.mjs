export class AddApiKeyPermissions1723719333525 {
  name = 'AddApiKeyPermissions1723719333525';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "api_keys" ADD "permissions" character varying array NOT NULL DEFAULT '{all}'`);
    await queryRunner.query(`ALTER TABLE "api_keys" ALTER COLUMN "permissions" DROP DEFAULT`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "api_keys" DROP COLUMN "permissions"`);
  }
}
