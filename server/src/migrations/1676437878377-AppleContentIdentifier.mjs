export class AppleContentIdentifier1676437878377 {
  name = 'AppleContentIdentifier1676437878377';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" ADD "livePhotoCID" character varying`);
    await queryRunner.query(`CREATE INDEX "IDX_live_photo_cid" ON "exif" ("livePhotoCID") `);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX "IDX_live_photo_cid"`);
    await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "livePhotoCID"`);
  }
}
