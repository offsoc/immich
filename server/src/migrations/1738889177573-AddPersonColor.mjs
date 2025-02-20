export class AddPersonColor1738889177573 {
    name = 'AddPersonColor1738889177573'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "person" ADD "color" character varying`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "color"`);
    }

}
