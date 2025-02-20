export class AscendingOrderAlbum1710182081326 {
    name = 'AscendingOrderAlbum1710182081326'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "albums" ADD "order" character varying NOT NULL DEFAULT 'desc'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "albums" DROP COLUMN "order"`);
    }

}
