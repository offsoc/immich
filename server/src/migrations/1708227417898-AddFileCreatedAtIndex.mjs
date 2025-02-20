export class AddFileCreatedAtIndex1708227417898 {

    async up(queryRunner) {
        await queryRunner.query(`CREATE INDEX idx_asset_file_created_at ON assets ("fileCreatedAt")`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX idx_asset_file_created_at`);
    }
}
