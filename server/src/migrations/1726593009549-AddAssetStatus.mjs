export class AddAssetStatus1726593009549 {
    name = 'AddAssetStatus1726593009549'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "assets_status_enum" AS ENUM('active', 'trashed', 'deleted')`);
        await queryRunner.query(`ALTER TABLE "assets" ADD "status" "assets_status_enum" NOT NULL DEFAULT 'active'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "assets_status_enum"`);
    }

}
