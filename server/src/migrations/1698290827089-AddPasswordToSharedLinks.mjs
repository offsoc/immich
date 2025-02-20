export class AddPasswordToSharedLinks1698290827089 {
    name = 'AddPasswordToSharedLinks1698290827089'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_links" ADD "password" character varying`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_links" DROP COLUMN "password"`);
    }

}
