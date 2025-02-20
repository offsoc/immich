export class CreateSystemConfigTable1665540663419 {
  name = 'CreateSystemConfigTable1665540663419';

  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE "system_config" ("key" character varying NOT NULL, "value" character varying, CONSTRAINT "PK_aab69295b445016f56731f4d535" PRIMARY KEY ("key"))`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "system_config"`);
  }
}
