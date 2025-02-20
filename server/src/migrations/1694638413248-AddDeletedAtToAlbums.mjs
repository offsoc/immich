export class AddDeletedAtToAlbums1694638413248 {
  name = 'AddDeletedAtToAlbums1694638413248';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "albums" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "albums" DROP COLUMN "deletedAt"`);
  }
}
