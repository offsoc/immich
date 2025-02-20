export class AdddInTimelineToPartnersTable1699562570201 {
    name = 'AdddInTimelineToPartnersTable1699562570201'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "partners" ADD "inTimeline" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "inTimeline"`);
    }

}
