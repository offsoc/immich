export class FixTimestampDataTypeInAssetTable1662427365521 {
  name = 'FixTimestampDataTypeInAssetTable1662427365521';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" ALTER COLUMN "exifTextSearchableColumn" SET NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "assets" ALTER COLUMN "createdAt" TYPE timestamptz USING "createdAt"::timestamptz`,
    );
    await queryRunner.query(
      `ALTER TABLE "assets" ALTER COLUMN "modifiedAt" TYPE timestamptz USING "createdAt"::timestamptz`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "createdAt" TYPE varchar USING "createdAt"::varchar`);
    await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "modifiedAt" TYPE varchar USING "createdAt"::varchar`);
    await queryRunner.query(`ALTER TABLE "exif" ALTER COLUMN "exifTextSearchableColumn" DROP NOT NULL`);
  }
}
