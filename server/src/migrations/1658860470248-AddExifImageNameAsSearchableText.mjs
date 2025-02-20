export class AddExifImageNameAsSearchableText1658860470248 {
  name = 'AddExifImageNameAsSearchableText1658860470248';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "exifTextSearchableColumn"`);
    await queryRunner.query(`ALTER TABLE "exif" ADD "exifTextSearchableColumn" tsvector GENERATED ALWAYS AS (TO_TSVECTOR('english',
                         COALESCE(make, '') || ' ' ||
                         COALESCE(model, '') || ' ' ||
                         COALESCE(orientation, '') || ' ' ||
                         COALESCE("lensModel", '') || ' ' ||
                         COALESCE("imageName", '') || ' ' ||
                         COALESCE("city", '') || ' ' ||
                         COALESCE("state", '') || ' ' ||
                         COALESCE("country", ''))) STORED`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "exif" ADD "exifTextSearchableColumn" tsvector NOT NULL`);
  }
}
