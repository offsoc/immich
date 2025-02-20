export class SeparateQualityForThumbnailAndPreview1727471863507 {
  async up(queryRunner) {
    await queryRunner.query(`
      update system_metadata
      set value = jsonb_set(value, '{image}', jsonb_strip_nulls(
        jsonb_build_object(
          'preview', jsonb_build_object(
            'format', value->'image'->'previewFormat',
            'quality', value->'image'->'quality',
            'size', value->'image'->'previewSize'),
          'thumbnail', jsonb_build_object(
            'format', value->'image'->'thumbnailFormat',
            'quality', value->'image'->'quality',
            'size', value->'image'->'thumbnailSize'),
          'extractEmbedded', value->'extractEmbedded',
          'colorspace', value->'colorspace'
        )))
        where key = 'system-config'`);
  }

  async down(queryRunner) {
    await queryRunner.query(`
      update system_metadata
        set value = jsonb_set(value, '{image}', jsonb_strip_nulls(jsonb_build_object(
          'previewFormat', value->'image'->'preview'->'format',
          'previewSize', value->'image'->'preview'->'size',
          'thumbnailFormat', value->'image'->'thumbnail'->'format',
          'thumbnailSize', value->'image'->'thumbnail'->'size',
          'extractEmbedded', value->'extractEmbedded',
          'colorspace', value->'colorspace',
          'quality', value->'image'->'preview'->'quality'
        )))
        where key = 'system-config'`);
  }
}
