export class UpdateOpusCodecToLibopus1694758412194 {
  name = 'UpdateOpusCodecToLibopus1694758412194'

  async up(queryRunner) {
    await queryRunner.query(`
                UPDATE system_config
                SET value = '"libopus"'
                WHERE key = 'ffmpeg.targetAudioCodec' AND value = '"opus"'
            `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
                UPDATE system_config
                SET value = '"opus"'
                WHERE key = 'ffmpeg.targetAudioCodec' AND value = '"libopus"'
            `);
  }
}
