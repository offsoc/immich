export class AddprofileChangedAt1726491047923 {
    name = 'AddprofileChangedAt1726491047923'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "profileChangedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileChangedAt"`);
    }

}
