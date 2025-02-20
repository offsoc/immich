export class AddAssetRelationIndices1710293990203 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE INDEX "IDX_asset_id_stackId" on assets ("id", "stackId")`);
        await queryRunner.query(`CREATE INDEX "IDX_tag_asset_assetsId_tagsId" on tag_asset ("assetsId", "tagsId")`);
        await queryRunner.query(`CREATE INDEX "IDX_asset_faces_assetId_personId" on asset_faces ("assetId", "personId")`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "IDX_asset_id_stackId" on assets ("id", "stackId")`);
        await queryRunner.query(`DROP INDEX "IDX_tag_asset_assetsId_tagsId" on tag_asset ("assetsId", "tagsId")`);
        await queryRunner.query(`DROP INDEX "IDX_asset_faces_assetId_personId" on asset_faces ("assetId", "personId")`);
    }
}
