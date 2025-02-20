export class AddOriginalFileNameToAssetTable1681144628393 {
  name = 'AddOriginalFileNameToAssetTable1681144628393';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "assets" ADD "originalFileName" character varying`);

    await queryRunner.query(`
    UPDATE assets a
      SET "originalFileName" = (
        select e."imageName"
        from exif e
        where e."assetId" = a.id
      )
    `);

    await queryRunner.query(`
    UPDATE assets a
      SET "originalFileName" = a.id
      where a."originalFileName" IS NULL or a."originalFileName" = ''
    `);

    await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "originalFileName" SET NOT NULL`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "originalFileName"`);
  }
}
