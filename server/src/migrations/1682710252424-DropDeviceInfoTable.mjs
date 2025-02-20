export class DropDeviceInfoTable1682710252424 {
  async up(queryRunner) {
    await queryRunner.query(`drop table device_info`);
  }

  async down(queryRunner) {
    await queryRunner.query(`
        create table if not exists device_info
        (
            id                  serial
                constraint "PK_b1c15a80b0a4e5f4eebadbdd92c"
                    primary key,
            "userId"            varchar                 not null,
            "deviceId"          varchar                 not null,
            "deviceType"        varchar                 not null,
            "notificationToken" varchar,
            "createdAt"         timestamp default now() not null,
            "isAutoBackup"      boolean   default false not null,
            constraint "UQ_ebad78f36b10d15fbea8560e107"
                unique ("userId", "deviceId")
        );
      `);
  }
}
