export class ChangeExifFileSizeInByteToBigInt1661528919411 {
  name = 'ChangeExifFileSizeInByteToBigInt1661528919411';

  async up(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE exif
      ALTER COLUMN "fileSizeInByte" type bigint using "fileSizeInByte"::bigint;
    `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
    ALTER TABLE exif
    ALTER COLUMN "fileSizeInByte" type integer using "fileSizeInByte"::integer;
  `);
  }
}
