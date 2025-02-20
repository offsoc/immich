export class OAuthId1670104716264 {
    name = 'OAuthId1670104716264'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "oauthId" character varying NOT NULL DEFAULT ''`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "oauthId"`);
    }

}
