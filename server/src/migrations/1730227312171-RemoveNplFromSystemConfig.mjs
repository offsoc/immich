export class RemoveNplFromSystemConfig1730227312171 {
  async up(queryRunner) {
    await queryRunner.query(`
        update system_metadata
        set value = value #- '{ffmpeg,npl}'
        where key = 'system-config' and value->'ffmpeg'->'npl' is not null`);
  }

  async down() {}
}
