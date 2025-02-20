export class AddRegionCityToExIf1646709533213 {
  async up(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE exif
        ADD COLUMN if not exists city varchar;

      ALTER TABLE exif
        ADD COLUMN if not exists state varchar;

      ALTER TABLE exif
        ADD COLUMN if not exists country varchar;
    `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE exif
      DROP COLUMN city;

      ALTER TABLE exif
      DROP COLUMN state;

      ALTER TABLE exif
      DROP COLUMN country;
    `);
  }
}
