import { DatabaseExtension } from 'src/enum';
import { ConfigRepository } from 'src/repositories/config.repository';
const vectorExtension = new ConfigRepository().getEnv().database.vectorExtension;

export class AddCLIPEmbeddingIndex1700713994428 {
  name = 'AddCLIPEmbeddingIndex1700713994428';

  async up(queryRunner) {
    if (vectorExtension === DatabaseExtension.VECTORS) {
      await queryRunner.query(`SET vectors.pgvector_compatibility=on`);
    }
    await queryRunner.query(`SET search_path TO "$user", public, vectors`);

    await queryRunner.query(`
      CREATE INDEX IF NOT EXISTS clip_index ON smart_search
      USING hnsw (embedding vector_cosine_ops)
      WITH (ef_construction = 300, m = 16)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX IF EXISTS clip_index`);
  }
}
