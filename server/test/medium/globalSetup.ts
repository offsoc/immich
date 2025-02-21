import { RedisContainer } from '@testcontainers/redis';
import { GenericContainer } from 'testcontainers';
import { DataSource } from 'typeorm';

const globalSetup = async () => {
  const redis = await new RedisContainer().start();
  const redisUrl = redis.getConnectionUrl();
  process.env.IMMICH_TEST_REDIS_URL = redisUrl;

  const postgres = await new GenericContainer('tensorchord/pgvecto-rs:pg14-v0.2.0')
    .withExposedPorts({ container: 5432, host: 32_828 })
    .withEnvironment({
      POSTGRES_PASSWORD: 'postgres',
      POSTGRES_USER: 'postgres',
      POSTGRES_DB: 'immich',
    })
    .withCommand([
      'postgres',
      '-c',
      'shared_preload_libraries=vectors.so',
      '-c',
      'search_path="$$user", public, vectors',
      '-c',
      'logging_collector=on',
      '-c',
      'max_wal_size=2GB',
      '-c',
      'shared_buffers=512MB',
      '-c',
      'wal_compression=on',
    ])
    .withReuse()
    .start();
  //    command: >-
  //       postgres
  //       -c shared_preload_libraries=vectors.so
  //       -c 'search_path="$$user", public, vectors'
  //       -c logging_collector=on
  //       -c max_wal_size=2GB
  //       -c shared_buffers=512MB
  //       -c wal_compression=on
  const postgresPort = postgres.getMappedPort(5432);
  const postgresUrl = `postgres://postgres:postgres@localhost:${postgresPort}/immich`;
  process.env.IMMICH_TEST_POSTGRES_URL = postgresUrl;
  console.log(postgresUrl);

  const modules = import.meta.glob('/src/migrations/*.ts', { eager: true });

  const config = {
    type: 'postgres' as const,
    migrations: Object.values(modules).map((module) => Object.values(module)[0]),
    migrationsRun: false,
    synchronize: false,
    connectTimeoutMS: 10_000, // 10 seconds
    parseInt8: true,
    url: postgresUrl,
  };

  const dataSource = new DataSource(config);
  await dataSource.initialize();
  await dataSource.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await dataSource.runMigrations();

  console.log(await dataSource.query('SELECT * FROM users'));

  return () => {
    return null;
  };
};

export default globalSetup;
