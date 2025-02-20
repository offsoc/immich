export class AddExifColorSpace1694750975773 {
    name = 'AddExifColorSpace1694750975773'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" ADD "profileDescription" character varying`);
        await queryRunner.query(`ALTER TABLE "exif" ADD "colorspace" character varying`);
        await queryRunner.query(`ALTER TABLE "exif" ADD "bitsPerSample" integer`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "bitsPerSample"`);
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "colorspace"`);
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "profileDescription"`);
    }

}
