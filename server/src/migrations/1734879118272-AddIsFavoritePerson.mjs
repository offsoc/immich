export class AddIsFavoritePerson1734879118272 {
    name = 'AddIsFavoritePerson1734879118272'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "person" ADD "isFavorite" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "isFavorite"`);
    }

}
