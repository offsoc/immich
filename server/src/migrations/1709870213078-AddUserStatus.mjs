export class AddUserStatus1709870213078 {
    name = 'AddUserStatus1709870213078'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "status" character varying NOT NULL DEFAULT 'active'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "status"`);
    }

}
