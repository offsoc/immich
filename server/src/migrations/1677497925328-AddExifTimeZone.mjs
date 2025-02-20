export class AddExifTimeZone1677497925328 {
    name = 'AddExifTimeZone1677497925328'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" ADD "timeZone" character varying`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "timeZone"`);
    }

}
