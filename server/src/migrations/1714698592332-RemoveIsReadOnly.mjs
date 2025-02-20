export class RemoveIsReadOnly1714698592332 {
    name = 'RemoveIsReadOnly1714698592332'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "isReadOnly"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ADD "isReadOnly" boolean NOT NULL DEFAULT false`);
    }

}
