export class AddCLIPEncodeDataColumn1677971458822 {
  name = 'AddCLIPEncodeDataColumn1677971458822';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "smart_info" ADD "clipEmbedding" numeric(20,19) array`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "smart_info" DROP COLUMN "clipEmbedding"`);
  }
}
