export class AddDeviceInfoToUserToken1682371791038 {
    name = 'AddDeviceInfoToUserToken1682371791038'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_token" ADD "deviceType" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user_token" ADD "deviceOS" character varying NOT NULL DEFAULT ''`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_token" DROP COLUMN "deviceOS"`);
        await queryRunner.query(`ALTER TABLE "user_token" DROP COLUMN "deviceType"`);
    }

}
