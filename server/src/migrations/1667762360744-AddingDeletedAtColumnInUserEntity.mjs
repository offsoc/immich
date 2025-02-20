export class AddingDeletedAtColumnInUserEntity1667762360744 {
  name = 'AddingDeletedAtColumnInUserEntity1667762360744';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
  }
}
