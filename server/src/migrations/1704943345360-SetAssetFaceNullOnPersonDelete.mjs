import { MigrationInterface, QueryRunner } from "typeorm"

export class SetAssetFaceNullOnPersonDelete1704943345360 {
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "asset_faces"
            DROP CONSTRAINT "FK_95ad7106dd7b484275443f580f9",
            ADD CONSTRAINT "FK_95ad7106dd7b484275443f580f9"
            FOREIGN KEY ("personId") REFERENCES "person"("id")
            ON DELETE SET NULL ON UPDATE CASCADE
    `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "asset_faces"
            DROP CONSTRAINT "FK_95ad7106dd7b484275443f580f9",
            ADD CONSTRAINT "FK_95ad7106dd7b484275443f580f9"
            FOREIGN KEY ("personId") REFERENCES "person"("id")
            ON DELETE CASCADE ON UPDATE CASCADE
        `);
    }

}
