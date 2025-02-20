import { MigrationInterface, QueryRunner } from "typeorm"

export class FixGPSNullIsland1692057328660 {

    async up(queryRunner) {
        await queryRunner.query(`UPDATE "exif" SET latitude = NULL, longitude = NULL WHERE latitude = 0 AND longitude = 0;`);
    }

    async down() {
        // Setting lat,lon to 0 not necessary
    }

}
