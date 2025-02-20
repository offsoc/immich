export class AddExtensionToOriginalFileName1709763765506 {
  async up(queryRunner) {
    await queryRunner.query(`
      WITH extension AS (WITH cte AS (SELECT a.id, STRING_TO_ARRAY(a."originalPath", '.')::TEXT[] AS arr
      FROM assets a)
      SELECT cte.id, cte.arr[ARRAY_UPPER(cte.arr, 1)] AS "ext"
      FROM cte)
      UPDATE assets
      SET "originalFileName" = assets."originalFileName" || '.' || extension."ext"
      FROM extension
      WHERE assets.id = extension.id;
      `);
  }

  async down() {
    // noop
  }
}
