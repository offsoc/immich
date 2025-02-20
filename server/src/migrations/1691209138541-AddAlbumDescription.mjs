export class AddAlbumDescription1691209138541 {
  name = 'AddAlbumDescription1691209138541';

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "albums" ADD "description" text NOT NULL DEFAULT ''`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "albums" DROP COLUMN "description"`);
  }
}
