export class GeonamesEnhancement1708116312820 {
    name = 'GeonamesEnhancement1708116312820'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE geodata_places ADD COLUMN "alternateNames" varchar`);
        await queryRunner.query(`
        CREATE INDEX idx_geodata_places_admin2_alternate_names
            ON geodata_places
        USING gin (f_unaccent("alternateNames") gin_trgm_ops)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE geodata_places DROP COLUMN "alternateNames"`);
    }

}
