import { DatabaseExtension } from 'src/enum';
import { ConfigRepository } from 'src/repositories/config.repository';
const vectorExtension = new ConfigRepository().getEnv().database.vectorExtension;

export class AddFaceEmbeddingIndex1700714033632 {
  name = 'AddFaceEmbeddingIndex1700714033632';

  async up(queryRunner) {
    if (vectorExtension === DatabaseExtension.VECTORS) {
      await queryRunner.query(`SET vectors.pgvector_compatibility=on`);
    }
    await queryRunner.query(`SET search_path TO "$user", public, vectors`);

    await queryRunner.query(`
      CREATE INDEX IF NOT EXISTS face_index ON asset_faces
      USING hnsw (embedding vector_cosine_ops)
      WITH (ef_construction = 300, m = 16)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX IF EXISTS face_index`);
  }
}
