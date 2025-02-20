export class DropSmartInfoTable1730989238718 {
  async up(queryRunner) {
    await queryRunner.query(`DROP TABLE smart_info`);
  }

  async down() {
    // not implemented
  }
}
