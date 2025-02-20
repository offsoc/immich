export class RemoveImageNameFromEXIFTable1681159594469 {
  name = 'RemoveImageNameFromEXIFTable1681159594469';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN IF EXISTS "exifTextSearchableColumn"`);
    await queryRunner.query(`ALTER TABLE "exif" ADD "exifTextSearchableColumn" tsvector GENERATED ALWAYS AS (TO_TSVECTOR('english',
                     COALESCE(make, '') || ' ' ||
                     COALESCE(model, '') || ' ' ||
                     COALESCE(orientation, '') || ' ' ||
                     COALESCE("lensModel", '') || ' ' ||
                     COALESCE("city", '') || ' ' ||
                     COALESCE("state", '') || ' ' ||
                     COALESCE("country", ''))) STORED NOT NULL`);
    await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "imageName"`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "exifTextSearchableColumn"`);
    await queryRunner.query(`ALTER TABLE "exif" ADD "exifTextSearchableColumn" tsvector GENERATED ALWAYS AS (TO_TSVECTOR('english',
                         COALESCE(make, '') || ' ' ||
                         COALESCE(model, '') || ' ' ||
                         COALESCE(orientation, '') || ' ' ||
                         COALESCE("lensModel", '') || ' ' ||
                         COALESCE("imageName", '') || ' ' ||
                         COALESCE("city", '') || ' ' ||
                         COALESCE("state", '') || ' ' ||
                         COALESCE("country", ''))) STORED NOT NULL`);
    await queryRunner.query(`ALTER TABLE "exif" ADD "imageName" character varying`);
  }
}
