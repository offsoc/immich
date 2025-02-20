export class AddUpdatedAtColumnToAlbumsUsersAssets1675667878312 {
  name = 'AddUpdatedAtColumnToAlbumsUsersAssets1675667878312';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "albums" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "assets" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "albums" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
  }
}
