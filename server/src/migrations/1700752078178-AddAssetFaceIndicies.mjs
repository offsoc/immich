export class AddAssetFaceIndicies1700752078178 {
    name = 'AddAssetFaceIndicies1700752078178'

    async up(queryRunner) {
        await queryRunner.query(`CREATE INDEX "IDX_bf339a24070dac7e71304ec530" ON "asset_faces" ("personId", "assetId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b463c8edb01364bf2beba08ef1" ON "assets" ("stackParentId") `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "IDX_b463c8edb01364bf2beba08ef1"`);
        await queryRunner.query(`DROP INDEX "IDX_bf339a24070dac7e71304ec530"`);
    }

}
