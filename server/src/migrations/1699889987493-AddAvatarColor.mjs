export class AddAvatarColor1699889987493 {
    name = 'AddAvatarColor1699889987493'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "avatarColor" character varying`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatarColor"`);
    }

}
