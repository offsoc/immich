export class RemoveExternalPath1708425975121 {
  name = 'RemoveExternalPath1708425975121';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "externalPath"`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "users" ADD "externalPath" character varying`);
  }
}
