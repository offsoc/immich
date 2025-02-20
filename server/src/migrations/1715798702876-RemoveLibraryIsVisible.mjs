export class RemoveLibraryIsVisible1715798702876 {
    name = 'RemoveLibraryIsVisible1715798702876'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "libraries" DROP COLUMN "isVisible"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "libraries" ADD "isVisible" boolean NOT NULL DEFAULT true`);
    }

}
