export class AddStorageLabel1684410565398 {
    name = 'AddStorageLabel1684410565398'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "storageLabel" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_b309cf34fa58137c416b32cea3a" UNIQUE ("storageLabel")`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_b309cf34fa58137c416b32cea3a"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "storageLabel"`);
    }

}
