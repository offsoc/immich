export class AddIndexForAlbumInSharedLinkTable1677535643119 {
    name = 'AddIndexForAlbumInSharedLinkTable1677535643119'

    async up(queryRunner) {
        await queryRunner.query(`CREATE INDEX "IDX_sharedlink_albumId" ON "shared_links" ("albumId") `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "IDX_sharedlink_albumId"`);
    }

}
