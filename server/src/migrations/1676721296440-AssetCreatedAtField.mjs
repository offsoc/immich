export class AssetCreatedAtField1676721296440 {
    name = 'AssetCreatedAtField1676721296440'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "createdAt"`);
    }

}
