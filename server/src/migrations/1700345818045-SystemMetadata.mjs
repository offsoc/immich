export class SystemMetadata1700345818045 {
    name = 'SystemMetadata1700345818045'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "system_metadata" ("key" character varying NOT NULL, "value" jsonb NOT NULL DEFAULT '{}', CONSTRAINT "PK_fa94f6857470fb5b81ec6084465" PRIMARY KEY ("key"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "system_metadata"`);
    }

}
