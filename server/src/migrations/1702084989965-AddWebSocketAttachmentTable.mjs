export class AddWebSocketAttachmentTable1702084989965 {
  async up(queryRunner) {
    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS "socket_io_attachments" (id bigserial UNIQUE, created_at timestamptz DEFAULT NOW(), payload bytea);',
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "socket_io_attachments"`);
  }
}
