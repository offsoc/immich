export class UpdateAssetTableWithEncodeVideoPath1654299904583 {
  async up(queryRunner) {
    await queryRunner.query(`
      alter table assets
        add column if not exists "encodedVideoPath" varchar default '';
      `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      alter table assets
        drop column if exists "encodedVideoPath";
      `);
  }
}
