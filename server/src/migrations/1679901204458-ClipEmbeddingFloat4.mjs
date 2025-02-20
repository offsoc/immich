export class ClipEmbeddingFloat41679901204458 {
  name = 'ClipEmbeddingFloat41679901204458';

  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "smart_info" ALTER COLUMN "clipEmbedding" TYPE real array USING "clipEmbedding"::real array`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "smart_info" ALTER COLUMN "clipEmbedding" TYPE numeric(20,19) array USING "clipEmbedding"::numeric(20,19) array`,
    );
  }
}
