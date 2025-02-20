export class CreateExifTextSearchIndex1646249734844 {
  async up(queryRunner) {
    await queryRunner.query(`
        CREATE INDEX exif_text_searchable_idx
        ON exif
        USING GIN (exif_text_searchable_column);
      `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      DROP INDEX IF EXISTS exif_text_searchable_idx ON exif;
      `);
  }
}
