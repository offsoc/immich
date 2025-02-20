export class AddSharedLinkCascade1685044328272 {
    name = 'AddSharedLinkCascade1685044328272'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_links" DROP CONSTRAINT "FK_0c6ce9058c29f07cdf7014eac66"`);
        await queryRunner.query(`ALTER TABLE "shared_links" ADD CONSTRAINT "FK_0c6ce9058c29f07cdf7014eac66" FOREIGN KEY ("albumId") REFERENCES "albums"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_links" DROP CONSTRAINT "FK_0c6ce9058c29f07cdf7014eac66"`);
        await queryRunner.query(`ALTER TABLE "shared_links" ADD CONSTRAINT "FK_0c6ce9058c29f07cdf7014eac66" FOREIGN KEY ("albumId") REFERENCES "albums"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
