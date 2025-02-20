export class AddIsArchivedColumn1680632845740 {
    name = 'AddIsArchivedColumn1680632845740'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ADD "isArchived" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "isArchived"`);
    }

}
