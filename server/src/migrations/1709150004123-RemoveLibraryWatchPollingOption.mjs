export class RemoveLibraryWatchPollingOption1709150004123 {
  async up(queryRunner) {
    await queryRunner.query(`DELETE FROM "system_config" WHERE key = 'library.watch.usePolling'`);
    await queryRunner.query(`DELETE FROM "system_config" WHERE key = 'library.watch.interval'`);
  }

  async down() {
    // noop
  }
}
