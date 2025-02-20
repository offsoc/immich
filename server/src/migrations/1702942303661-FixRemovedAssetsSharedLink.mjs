export class FixRemovedAssetsSharedLink1702942303661 {
    name = 'FixRemovedAssetsSharedLink1702942303661'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_link__asset" DROP CONSTRAINT "FK_c9fab4aa97ffd1b034f3d6581ab"`);
        await queryRunner.query(`ALTER TABLE "shared_link__asset" ADD CONSTRAINT "FK_c9fab4aa97ffd1b034f3d6581ab" FOREIGN KEY ("sharedLinksId") REFERENCES "shared_links"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_link__asset" DROP CONSTRAINT "FK_c9fab4aa97ffd1b034f3d6581ab"`);
        await queryRunner.query(`ALTER TABLE "shared_link__asset" ADD CONSTRAINT "FK_c9fab4aa97ffd1b034f3d6581ab" FOREIGN KEY ("sharedLinksId") REFERENCES "shared_links"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
