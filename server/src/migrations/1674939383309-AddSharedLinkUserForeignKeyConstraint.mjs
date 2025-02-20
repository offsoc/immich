export class AddSharedLinkUserForeignKeyConstraint1674939383309 {
  name = 'AddSharedLinkUserForeignKeyConstraint1674939383309';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "shared_links" ALTER COLUMN "userId" TYPE varchar(36)`);
    await queryRunner.query(`ALTER TABLE "shared_links" ALTER COLUMN "userId" TYPE uuid using "userId"::uuid`);
    await queryRunner.query(
      `ALTER TABLE "shared_links" ADD CONSTRAINT "FK_66fe3837414c5a9f1c33ca49340" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "shared_links" DROP CONSTRAINT "FK_66fe3837414c5a9f1c33ca49340"`);
    await queryRunner.query(`ALTER TABLE "shared_links" ALTER COLUMN "userId" TYPE character varying`);
  }
}
