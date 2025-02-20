export class AddThumbhashColumn1685546571785 {
  name = 'AddThumbhashColumn1686762895180';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "assets" ADD "thumbhash" bytea NULL`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "thumbhash"`);
  }
}
