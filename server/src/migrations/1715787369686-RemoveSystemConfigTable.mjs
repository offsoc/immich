import _ from 'lodash';
export class RemoveSystemConfigTable1715787369686 {
  async up(queryRunner) {
    const overrides = await queryRunner.query('SELECT "key", "value" FROM "system_config"');
    if (overrides.length === 0) {
      return;
    }

    const config = {};
    for (const { key, value } of overrides) {
      _.set(config, key, JSON.parse(value));
    }

    await queryRunner.query(`INSERT INTO "system_metadata" ("key", "value") VALUES ($1, $2)`, [
      'system-config',
      // yup, we're double-stringifying it
      JSON.stringify(JSON.stringify(config)),
    ]);

    await queryRunner.query(`DROP TABLE "system_config"`);
  }

  async down(queryRunner) {
    // no data restore, you just get the table back
    await queryRunner.query(
      `CREATE TABLE "system_config" ("key" character varying NOT NULL, "value" character varying, CONSTRAINT "PK_aab69295b445016f56731f4d535" PRIMARY KEY ("key"))`,
    );
  }
}
