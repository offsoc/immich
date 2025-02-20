export class RemoveHiddenAssetsFromAlbums1725730782681 {
  async up(queryRunner) {
    await queryRunner.query(
      `DELETE FROM "albums_assets_assets" WHERE "assetsId" IN (SELECT "id" FROM "assets" WHERE "isVisible" = false)`,
    );
  }

  async down() {
    // noop
  }
}
