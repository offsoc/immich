export class AddStackParentIdToAssets1695354433573 {
    name = 'AddStackParentIdToAssets1695354433573'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" ADD "stackParentId" uuid`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_b463c8edb01364bf2beba08ef19" FOREIGN KEY ("stackParentId") REFERENCES "assets"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_b463c8edb01364bf2beba08ef19"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "stackParentId"`);
    }

}
