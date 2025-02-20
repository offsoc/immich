export class AddAlbumAssetCreatedAt1729793521993 {
  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "albums_assets_assets" ADD COLUMN "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "albums_assets_assets" DROP COLUMN "createdAt"`);
  }
}
