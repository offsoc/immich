export class AddMetadataExtractedAt1705094221536 {
  name = 'AddMetadataExtractedAt1705094221536';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "asset_job_status" ADD "metadataExtractedAt" TIMESTAMP WITH TIME ZONE`);
    await queryRunner.query(`
      UPDATE "asset_job_status"
      SET "metadataExtractedAt" = NOW()
      FROM "exif"
      WHERE "exif"."assetId" = "asset_job_status"."assetId";
`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "asset_job_status" DROP COLUMN "metadataExtractedAt"`);
  }
}
