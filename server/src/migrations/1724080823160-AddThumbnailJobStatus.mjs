export class AddThumbnailJobStatus1724080823160 {
  name = 'AddThumbnailJobStatus1724080823160';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "asset_job_status" ADD "previewAt" TIMESTAMP WITH TIME ZONE`);
    await queryRunner.query(`ALTER TABLE "asset_job_status" ADD "thumbnailAt" TIMESTAMP WITH TIME ZONE`);
    await queryRunner.query(`UPDATE "asset_job_status" SET "previewAt" = NOW() FROM "assets" WHERE "assetId" = "assets"."id" AND "assets"."previewPath" IS NOT NULL`);
    await queryRunner.query(`UPDATE "asset_job_status" SET "thumbnailAt" = NOW() FROM "assets" WHERE "assetId" = "assets"."id" AND "assets"."thumbnailPath" IS NOT NULL`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "asset_job_status" DROP COLUMN "thumbnailAt"`);
    await queryRunner.query(`ALTER TABLE "asset_job_status" DROP COLUMN "previewAt"`);
  }
}
