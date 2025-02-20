export class RemoveInvalidCoordinates1695660378655 {
  name = 'RemoveInvalidCoordinates1695660378655';

  async up(queryRunner) {
    await queryRunner.query(`UPDATE "exif" SET "latitude" = NULL WHERE "latitude" IN ('NaN', 'Infinity', '-Infinity')`);
    await queryRunner.query(
      `UPDATE "exif" SET "longitude" = NULL WHERE "longitude" IN ('NaN', 'Infinity', '-Infinity')`,
    );
  }

  async down() {
    // Empty, data cannot be restored
  }
}
