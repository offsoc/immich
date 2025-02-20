export class AddOriginalFileNameIndex1705306747072 {
  name = 'AddOriginalFileNameIndex1705306747072';

  async up(queryRunner) {
    await queryRunner.query(`CREATE INDEX "IDX_4d66e76dada1ca180f67a205dc" ON "assets" ("originalFileName") `);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX "IDX_4d66e76dada1ca180f67a205dc"`);
  }
}
