export class SmartInfoEntityDefinitionFixes1676852143506 {
    name = 'SmartInfoEntityDefinitionFixes1676852143506'

    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX "IDX_5e3753aadd956110bf3ec0244a"`);
        await queryRunner.query(`ALTER TABLE "smart_info" DROP CONSTRAINT "PK_0beace66440e9713f5c40470e46"`);
        await queryRunner.query(`ALTER TABLE "smart_info" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "smart_info" DROP CONSTRAINT "FK_5e3753aadd956110bf3ec0244ac"`);
        await queryRunner.query(`ALTER TABLE "smart_info" ADD CONSTRAINT "PK_5e3753aadd956110bf3ec0244ac" PRIMARY KEY ("assetId")`);
        await queryRunner.query(`ALTER TABLE "smart_info" ADD CONSTRAINT "FK_5e3753aadd956110bf3ec0244ac" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "smart_info" DROP CONSTRAINT "FK_5e3753aadd956110bf3ec0244ac"`);
        await queryRunner.query(`ALTER TABLE "smart_info" DROP CONSTRAINT "PK_5e3753aadd956110bf3ec0244ac"`);
        await queryRunner.query(`ALTER TABLE "smart_info" ADD CONSTRAINT "FK_5e3753aadd956110bf3ec0244ac" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "smart_info" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "smart_info" ADD CONSTRAINT "PK_0beace66440e9713f5c40470e46" PRIMARY KEY ("id")`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_5e3753aadd956110bf3ec0244a" ON "smart_info" ("assetId") `);
    }

}
