export class AddAssetDeletedAtColumn1694204416744 {
    name = 'AddAssetDeletedAtColumn1694204416744'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "deletedAt"`);
    }

}
