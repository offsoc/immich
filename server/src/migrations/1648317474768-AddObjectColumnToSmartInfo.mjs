export class AddObjectColumnToSmartInfo1648317474768 {
  async up(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE smart_info
        ADD COLUMN if not exists objects text[];

    `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE smart_info
        DROP COLUMN objects;
    `);
  }
}
