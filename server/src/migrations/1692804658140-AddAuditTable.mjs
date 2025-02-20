export class AddAuditTable1692804658140 {
    name = 'AddAuditTable1692804658140'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "audit" ("id" SERIAL NOT NULL, "entityType" character varying NOT NULL, "entityId" uuid NOT NULL, "action" character varying NOT NULL, "ownerId" uuid NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_1d3d120ddaf7bc9b1ed68ed463a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ownerId_createdAt" ON "audit" ("ownerId", "createdAt") `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "IDX_ownerId_createdAt"`);
        await queryRunner.query(`DROP TABLE "audit"`);
    }

}
