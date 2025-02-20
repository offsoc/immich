export class AlterExifExposureTimeToString1674757936889 {
    name = 'AlterExifExposureTimeToString1674757936889'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "exposureTime"`);
        await queryRunner.query(`ALTER TABLE "exif" ADD "exposureTime" character varying`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "exposureTime"`);
        await queryRunner.query(`ALTER TABLE "exif" ADD "exposureTime" double precision`);
    }

}
