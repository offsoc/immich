export class RequireChecksumNotNull1684328185099 {
  name = 'removeNotNullFromChecksumIndex1684328185099';

  async up(queryRunner) {
    await queryRunner.query(`DROP INDEX "IDX_64c507300988dd1764f9a6530c"`);
    await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "checksum" SET NOT NULL`);
    await queryRunner.query(`CREATE INDEX "IDX_8d3efe36c0755849395e6ea866" ON "assets" ("checksum") `);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX "IDX_8d3efe36c0755849395e6ea866"`);
    await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "checksum" DROP NOT NULL`);
    await queryRunner.query(
      `CREATE INDEX "IDX_64c507300988dd1764f9a6530c" ON "assets" ("checksum") WHERE ('checksum' IS NOT NULL)`,
    );
  }
}
