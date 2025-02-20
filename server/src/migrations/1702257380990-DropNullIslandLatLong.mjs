export class DropNullIslandLatLong1702257380990 {
  async up(queryRunner) {
    await queryRunner.query(
      'UPDATE "exif" SET latitude = NULL, longitude = NULL WHERE latitude = 0 AND longitude = 0;',
    );
  }

  async down() {
    // There's no way to know which assets used to have 0/0 lat-long if we've
    // already run this migration.
  }
}
