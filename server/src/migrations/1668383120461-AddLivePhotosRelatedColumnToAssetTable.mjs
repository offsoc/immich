export class AddLivePhotosRelatedColumnToAssetTable1668383120461 {
    name = 'AddLivePhotosRelatedColumnToAssetTable1668383120461'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ADD "isVisible" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "assets" ADD "livePhotoVideoId" uuid`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "livePhotoVideoId"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "isVisible"`);
    }

}
