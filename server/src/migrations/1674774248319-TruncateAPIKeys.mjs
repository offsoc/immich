import { MigrationInterface, QueryRunner } from "typeorm"

export class TruncateAPIKeys1674774248319 {
    name = 'TruncateAPIKeys1674774248319'

    async up(queryRunner) {
        await queryRunner.query(`TRUNCATE TABLE "api_keys"`);
    }

    async down() {
        //noop
    }

}
