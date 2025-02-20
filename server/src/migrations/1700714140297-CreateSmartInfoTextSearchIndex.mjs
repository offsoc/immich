export class CreateSmartInfoTextSearchIndex1700714140297 {
  name = 'CreateSmartInfoTextSearchIndex1700714140297';

  async up(queryRunner) {
    // https://dba.stackexchange.com/a/164081
    await queryRunner.query(`
        CREATE OR REPLACE FUNCTION f_concat_ws(text, text[])
        RETURNS text
        LANGUAGE sql IMMUTABLE PARALLEL SAFE AS
        'SELECT array_to_string($2, $1)'`);

    await queryRunner.query(`
        ALTER TABLE smart_info ADD "smartInfoTextSearchableColumn" tsvector
        GENERATED ALWAYS AS (
            TO_TSVECTOR(
                'english',
                f_concat_ws(
                    ' '::text,
                    COALESCE(tags, array[]::text[]) || COALESCE(objects, array[]::text[])
                )
            )
        )
        STORED NOT NULL`);

    await queryRunner.query(`
        CREATE INDEX smart_info_text_searchable_idx
        ON smart_info
        USING GIN ("smartInfoTextSearchableColumn")`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP FUNCTION IF EXISTS immutable_concat_ws`);
    await queryRunner.query(`ALTER TABLE smart_info DROP IF EXISTS "smartInfoTextSearchableColumn"`);
  }
}
