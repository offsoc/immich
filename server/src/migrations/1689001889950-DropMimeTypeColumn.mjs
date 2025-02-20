export class DropMimeTypeColumn1689001889950 {
    name = 'DropMimeTypeColumn1689001889950'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "mimeType"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ADD "mimeType" character varying`);
    }

}
