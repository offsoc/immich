export class SharedLinkEntityDefinitionFixes1676848694786 {
    name = 'SharedLinkEntityDefinitionFixes1676848694786'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_links" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_links" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
