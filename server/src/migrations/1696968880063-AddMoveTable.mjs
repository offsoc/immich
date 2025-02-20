export class AddMoveTable1696968880063 {
    name = 'AddMoveTable1696968880063'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "move_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "entityId" character varying NOT NULL, "pathType" character varying NOT NULL, "oldPath" character varying NOT NULL, "newPath" character varying NOT NULL, CONSTRAINT "UQ_newPath" UNIQUE ("newPath"), CONSTRAINT "UQ_entityId_pathType" UNIQUE ("entityId", "pathType"), CONSTRAINT "PK_af608f132233acf123f2949678d" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "move_history"`);
    }

}
