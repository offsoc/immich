export class UpdateTranscodeOption1679751316282 {
  async up(queryRunner) {
    await queryRunner.query(`
          UPDATE system_config
          SET
            key = 'ffmpeg.transcode',
            value = '"all"'
          WHERE
            key = 'ffmpeg.transcodeAll' AND value = 'true'
        `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
          UPDATE system_config
          SET
            key = 'ffmpeg.transcodeAll',
            value = 'true'
          WHERE
            key = 'ffmpeg.transcode' AND value = '"all"'
        `);

    await queryRunner.query(`DELETE FROM "system_config" WHERE key = 'ffmpeg.transcode'`);
  }
}
