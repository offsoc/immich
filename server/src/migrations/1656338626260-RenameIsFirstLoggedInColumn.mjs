export class RenameIsFirstLoggedInColumn1656338626260 {
  async up(queryRunner) {
    await queryRunner.query(`
    ALTER TABLE users
         RENAME COLUMN "isFirstLoggedIn" to "shouldChangePassword";
    `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE users
          RENAME COLUMN "shouldChangePassword" to "isFirstLoggedIn";
    `);
  }
}
