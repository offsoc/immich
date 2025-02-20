export class RenameSharedAlbums1655401127251 {
  async up(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE shared_albums RENAME TO albums;

      ALTER TABLE asset_shared_album RENAME TO asset_album;
    `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE asset_album RENAME TO asset_shared_album;

      ALTER TABLE albums RENAME TO shared_albums;
    `);
  }
}
