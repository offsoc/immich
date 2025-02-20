export class FixTagUniqueness1725023079109 {
    name = 'FixTagUniqueness1725023079109'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "UQ_d090e09fe86ebe2ec0aec27b451"`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "UQ_79d6f16e52bb2c7130375246793" UNIQUE ("userId", "value")`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "UQ_79d6f16e52bb2c7130375246793"`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "UQ_d090e09fe86ebe2ec0aec27b451" UNIQUE ("value")`);
    }

}
