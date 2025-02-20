export class RenameMachineLearningUrlToUrls1733339482860 {
  async up(queryRunner) {
    await queryRunner.query(`
        UPDATE system_metadata
        SET value = jsonb_insert(value #- '{machineLearning,url}', '{machineLearning,urls}'::text[], jsonb_build_array(value->'machineLearning'->'url'))
        WHERE key = 'system-config' AND value->'machineLearning'->'url' IS NOT NULL
    `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
        UPDATE system_metadata
        SET value = jsonb_insert(value #- '{machineLearning,urls}', '{machineLearning,url}'::text[], to_jsonb(value->'machineLearning'->'urls'->>0))
        WHERE key = 'system-config' AND value->'machineLearning'->'urls' IS NOT NULL AND jsonb_array_length(value->'machineLearning'->'urls') >= 1
    `);
  }
}
