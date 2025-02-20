export class AddSourceColumnToAssetFace1721249222549 {
    name = 'AddSourceColumnToAssetFace1721249222549'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE sourceType AS ENUM ('machine-learning', 'exif');`);
        await queryRunner.query(`ALTER TABLE "asset_faces" ADD "sourceType" sourceType NOT NULL DEFAULT 'machine-learning'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset_faces" DROP COLUMN "sourceType"`);
        await queryRunner.query(`DROP TYPE sourceType`);
    }

}
