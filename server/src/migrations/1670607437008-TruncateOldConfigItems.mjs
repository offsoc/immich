export class TruncateOldConfigItems1670607437008 {
  async up(queryRunner) {
    await queryRunner.query(`TRUNCATE TABLE "system_config"`);
  }

  async down() {
    // noop
  }
}
