export class AddSidecarFile1684273840676 {
    name = 'AddSidecarFile1684273840676'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ADD "sidecarPath" character varying`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "sidecarPath"`);
    }

}
