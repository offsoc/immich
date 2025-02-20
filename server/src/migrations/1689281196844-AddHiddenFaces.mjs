export class Infra1689281196844 {
    name = 'Infra1689281196844'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "person" ADD "isHidden" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "isHidden"`);
    }

}
