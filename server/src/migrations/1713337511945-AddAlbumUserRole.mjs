export class AddAlbumUserRole1713337511945 {
    name = 'AddAlbumUserRole1713337511945'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "albums_shared_users_users" ADD "role" character varying NOT NULL DEFAULT 'editor'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "albums_shared_users_users" DROP COLUMN "role"`);
    }

}
