export class CascadeSharedLinksDelete1709825430031 {
    name = 'CascadeSharedLinksDelete1709825430031'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_links" DROP CONSTRAINT "FK_66fe3837414c5a9f1c33ca49340"`);
        await queryRunner.query(`ALTER TABLE "shared_links" ADD CONSTRAINT "FK_66fe3837414c5a9f1c33ca49340" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shared_links" DROP CONSTRAINT "FK_66fe3837414c5a9f1c33ca49340"`);
        await queryRunner.query(`ALTER TABLE "shared_links" ADD CONSTRAINT "FK_66fe3837414c5a9f1c33ca49340" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
