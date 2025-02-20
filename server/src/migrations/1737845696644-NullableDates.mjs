export class NullableDates1737845696644 {
    name = 'NullableDates1737845696644'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "fileCreatedAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "localDateTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "fileModifiedAt" DROP NOT NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "fileModifiedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "localDateTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "fileCreatedAt" SET NOT NULL`);
    }

}
