import { MigrationInterface, QueryRunner } from "typeorm"

export class AddPersonBirthDate1692112147855 {

    async up(queryRunner) {
      await queryRunner.query(`ALTER TABLE "person" ADD "birthDate" date`);
    }

    async down(queryRunner) {
      await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "birthDate"`);
    }

}
