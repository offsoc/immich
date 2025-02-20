export class UpdateAssetTableWithWebpPath1653214255670 {
  async up(queryRunner) {
    await queryRunner.query(`
      alter table assets
        add column if not exists "webpPath" varchar default '';
      `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      alter table assets
        drop column if exists "webpPath";
      `);
  }
}
