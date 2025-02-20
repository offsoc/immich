export class Panoramas1690217088596 {
  name = 'Panoramas1690217088596';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" ADD "projectionType" character varying`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "projectionType"`);
  }
}
