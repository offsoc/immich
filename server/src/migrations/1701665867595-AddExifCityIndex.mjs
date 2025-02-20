export class AddExifCityIndex1701665867595 {
    name = 'AddExifCityIndex1701665867595'

    async up(queryRunner) {
        await queryRunner.query(`CREATE INDEX "exif_city" ON "exif" ("city") `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "exif_city"`);
    }

}
