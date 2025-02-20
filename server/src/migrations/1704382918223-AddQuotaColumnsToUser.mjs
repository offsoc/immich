export class AddQuotaColumnsToUser1704382918223 {
    name = 'AddQuotaColumnsToUser1704382918223'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "quotaSizeInBytes" bigint`);
        await queryRunner.query(`ALTER TABLE "users" ADD "quotaUsageInBytes" bigint NOT NULL DEFAULT '0'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "quotaUsageInBytes"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "quotaSizeInBytes"`);
    }

}
