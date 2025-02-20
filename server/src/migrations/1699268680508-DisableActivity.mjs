export class DisableActivity1699268680508 {
    name = 'DisableActivity1699268680508'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "albums" ADD "isActivityEnabled" boolean NOT NULL DEFAULT true`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "albums" DROP COLUMN "isActivityEnabled"`);
    }

}
