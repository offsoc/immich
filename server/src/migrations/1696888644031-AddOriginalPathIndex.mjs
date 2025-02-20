export class AddOriginalPathIndex1696888644031 {
  name = 'AddOriginalPathIndex1696888644031';

  async up(queryRunner) {
    await queryRunner.query(`CREATE INDEX "IDX_originalPath_libraryId" ON "assets" ("originalPath", "libraryId")`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX "IDX_originalPath_libraryId"`);
  }
}
