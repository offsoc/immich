export class IsOfflineSetDeletedAt1727781844613 {

    async up(queryRunner) {
      await queryRunner.query(
        `UPDATE assets SET "deletedAt" = now() WHERE "isOffline" = true AND "deletedAt" IS NULL`,
      );
    }

    async down(queryRunner) {
      await queryRunner.query(
        `UPDATE assets SET "deletedAt" = null WHERE "isOffline" = true`,
      );
    }
}
