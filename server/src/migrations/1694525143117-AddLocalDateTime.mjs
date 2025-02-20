export class AddLocalDateTime1694525143117 {
  name = 'AddLocalDateTime1694525143117';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "assets" ADD "localDateTime" TIMESTAMP WITH TIME ZONE`);
    await queryRunner.query(`UPDATE "assets" SET "localDateTime" = "fileCreatedAt"`);
    await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "localDateTime" SET NOT NULL`);
    await queryRunner.query(
      `CREATE INDEX "IDX_day_of_month" ON assets (EXTRACT(DAY FROM "localDateTime" AT TIME ZONE 'UTC'))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_month" ON assets (EXTRACT(MONTH FROM "localDateTime" AT TIME ZONE 'UTC'))`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "localDateTime"`);
    await queryRunner.query(`DROP INDEX "IDX_day_of_month"`);
    await queryRunner.query(`DROP INDEX "IDX_month"`);
  }
}
