export class AddSmartInfoTagsIndex1700714072055 {
  name = 'AddSmartInfoTagsIndex1700714072055';

  async up(queryRunner) {
    await queryRunner.query(`CREATE INDEX IF NOT EXISTS si_tags ON smart_info USING GIN (tags);`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX IF EXISTS si_tags;`);
  }
}
