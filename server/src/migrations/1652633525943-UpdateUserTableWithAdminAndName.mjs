export class UpdateUserTableWithAdminAndName1652633525943 {
  async up(queryRunner) {
    await queryRunner.query(`
      alter table users
          add column if not exists "firstName" varchar default '';

      alter table users
          add column if not exists "lastName" varchar default '';

      alter table users
          add column if not exists "profileImagePath" varchar default '';

      alter table users
          add column if not exists "isAdmin" bool default false;

      alter table users
          add column if not exists "isFirstLoggedIn" bool default true;
      `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
        alter table users
          drop column "firstName";

        alter table users
          drop column "lastName";

        alter table users
          drop column "isAdmin";

        `);
  }
}
