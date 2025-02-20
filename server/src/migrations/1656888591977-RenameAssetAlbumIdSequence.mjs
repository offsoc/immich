export class RenameAssetAlbumIdSequence1656888591977 {
  async up(queryRunner) {
    await queryRunner.query(`alter sequence asset_shared_album_id_seq rename to asset_album_id_seq;`);
    await queryRunner.query(
      `alter table asset_album alter column id set default nextval('asset_album_id_seq'::regclass);`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`alter sequence asset_album_id_seq rename to asset_shared_album_id_seq;`);
    await queryRunner.query(
      `alter table asset_album alter column id set default nextval('asset_shared_album_id_seq'::regclass);`,
    );
  }
}
