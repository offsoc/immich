export class NullifyFutureBirthDatesAndAddCheckConstraint1702938928766 {
    name = 'NullifyFutureBirthDatesAndAddCheckConstraint1702938928766'

    async up(queryRunner) {
        await queryRunner.query(`UPDATE "person" SET "birthDate" = NULL WHERE "birthDate" > CURRENT_DATE;`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "CHK_b0f82b0ed662bfc24fbb58bb45" CHECK ("birthDate" <= CURRENT_DATE)`);
    }

    async down(queryRunner) {
        // The down method cannot revert the nullified dates
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "CHK_b0f82b0ed662bfc24fbb58bb45"`);
    }

}
