export class AddCaption1661011331242 {
  name = 'AddCaption1661011331242';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" ADD "description" text DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE "exif" ADD "fps" double precision`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "fps"`);
    await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "description"`);
  }
}
