export class AddAssetChecksum1661881837496 {
  name = 'AddAssetChecksum1661881837496';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "assets" ADD "checksum" bytea`);
    await queryRunner.query(
      `CREATE INDEX "IDX_64c507300988dd1764f9a6530c" ON "assets" ("checksum") WHERE 'checksum' IS NOT NULL`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX "IDX_64c507300988dd1764f9a6530c"`);
    await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "checksum"`);
  }
}
