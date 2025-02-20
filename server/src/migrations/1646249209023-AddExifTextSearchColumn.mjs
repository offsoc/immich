export class AddExifTextSearchColumn1646249209023 {
  async up(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE exif
      ADD COLUMN IF NOT EXISTS exif_text_searchable_column tsvector
          GENERATED ALWAYS AS (
              TO_TSVECTOR('english',
                         COALESCE(make, '') || ' ' ||
                         COALESCE(model, '') || ' ' ||
                         COALESCE(orientation, '') || ' ' ||
                         COALESCE("lensModel", '')
                  )
              ) STORED;
    `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE exif
      DROP COLUMN IF EXISTS exif_text_searchable_column;
    `);
  }
}
