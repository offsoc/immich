export class CreateUserTable1645130759468 {
  async up(queryRunner){
    await queryRunner.query(`
        create table if not exists users
        (
            id          uuid      default uuid_generate_v4() not null
                constraint "PK_a3ffb1c0c8416b9fc6f907b7433"
                    primary key,
            email       varchar                              not null,
            password    varchar                              not null,
            salt        varchar                              not null,
            "createdAt" timestamp default now()              not null
        );
      `);
  }

  async down(queryRunner) {
    await queryRunner.query(`drop table users`);
  }
}
