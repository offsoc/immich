export class RemoveRedundantConstraints1680694465853 {
    name = 'RemoveRedundantConstraints1680694465853'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" DROP CONSTRAINT "REL_c0117fdbc50b917ef9067740c4"`);
        await queryRunner.query(`ALTER TABLE "smart_info" DROP CONSTRAINT "UQ_5e3753aadd956110bf3ec0244ac"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "smart_info" ADD CONSTRAINT "UQ_5e3753aadd956110bf3ec0244ac" UNIQUE ("assetId")`);
        await queryRunner.query(`ALTER TABLE "exif" ADD CONSTRAINT "REL_c0117fdbc50b917ef9067740c4" UNIQUE ("assetId")`);
    }

}
