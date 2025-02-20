export class AddAutoStackId1703035138085 {
    name = 'AddAutoStackId1703035138085'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exif" ADD "autoStackId" character varying`);
        await queryRunner.query(`CREATE INDEX "IDX_auto_stack_id" ON "exif" ("autoStackId") `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "IDX_auto_stack_id"`);
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "autoStackId"`);
    }

}
