export class AddMorePermissionToSharedLink1673907194740 {
  name = 'AddMorePermissionToSharedLink1673907194740';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "shared_links" ADD "allowDownload" boolean NOT NULL DEFAULT true`);
    await queryRunner.query(`ALTER TABLE "shared_links" ADD "showExif" boolean NOT NULL DEFAULT true`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "shared_links" DROP COLUMN "showExif"`);
    await queryRunner.query(`ALTER TABLE "shared_links" DROP COLUMN "allowDownload"`);
  }
}
