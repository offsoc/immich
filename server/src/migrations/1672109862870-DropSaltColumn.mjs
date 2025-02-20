export class DropSaltColumn1672109862870 {
    name = 'DropSaltColumn1672109862870'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "salt"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "salt" character varying NOT NULL DEFAULT ''`);
    }

}
