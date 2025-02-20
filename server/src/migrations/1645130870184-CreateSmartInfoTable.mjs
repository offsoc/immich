export class CreateSmartInfoTable1645130870184 {
  async up(queryRunner) {
    await queryRunner.query(`
        create table if not exists smart_info
        (
            id        serial
                constraint "PK_0beace66440e9713f5c40470e46"
                    primary key,
            "assetId" uuid not null
                constraint "UQ_5e3753aadd956110bf3ec0244ac"
                    unique
                constraint "FK_5e3753aadd956110bf3ec0244ac"
                    references assets
                    on delete cascade,
            tags      text[]
        );

        create unique index if not exists "IDX_5e3753aadd956110bf3ec0244a"
          on smart_info ("assetId");
      `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
        drop table smart_info;
      `);
  }
}
