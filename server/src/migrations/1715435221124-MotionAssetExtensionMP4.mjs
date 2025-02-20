export class MotionAssetExtensionMP41715435221124 {
  async up(queryRunner) {
    await queryRunner.query(
      `UPDATE "assets" SET "originalFileName" = regexp_replace("originalFileName", '\\.[a-zA-Z0-9]+$', '.mp4') WHERE "originalPath" LIKE '%.mp4' AND "isVisible" = false`,
    );
  }

  async down() {}
}
