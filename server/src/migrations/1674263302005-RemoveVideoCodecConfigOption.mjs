import {MigrationInterface, QueryRunner} from 'typeorm';

export class RemoveVideoCodecConfigOption1674263302006 {
  async up(queryRunner) {
    await queryRunner.query(`DELETE FROM "system_config" WHERE key = 'ffmpeg.targetVideoCodec'`);
    await queryRunner.query(`DELETE FROM "system_config" WHERE key = 'ffmpeg.targetAudioCodec'`);
  }

  async down() {
    // noop
  }
}
