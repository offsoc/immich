export class AddRating1722753178937 {
    name = 'AddRating1722753178937'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" ADD "rating" integer`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "rating"`);
    }

}
