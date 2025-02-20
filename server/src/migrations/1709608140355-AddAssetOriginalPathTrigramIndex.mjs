export class AddAssetOriginalPathTrigramIndex1709608140355 {
  async up(queryRunner) {
    await queryRunner.query(`
    CREATE INDEX idx_originalFileName_trigram
        ON assets
    USING gin (f_unaccent("originalFileName") gin_trgm_ops)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX "idx_originalFileName_trigram"`);
  }
}
