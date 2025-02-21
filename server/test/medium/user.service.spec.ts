import { Kysely } from 'kysely';
import { PostgresJSDialect } from 'kysely-postgres-js';
import { parse } from 'pg-connection-string';
import postgres, { Notice } from 'postgres';
import { DB } from 'src/db';
import { UserRepository } from 'src/repositories/user.repository';
import { MetadataService } from 'src/services/metadata.service';
import { UserService } from 'src/services/user.service';
import { newTestService, ServiceMocks } from 'test/utils';

const parsed = parse(process.env.IMMICH_TEST_POSTGRES_URL!);

const parsedOptions = {
  ...parsed,
  ssl: false,
  host: parsed.host ?? undefined,
  port: parsed.port ? Number(parsed.port) : undefined,
  database: parsed.database ?? undefined,
};

const driverOptions = {
  ...parsedOptions,
  onnotice: (notice: Notice) => {
    if (notice['severity'] !== 'NOTICE') {
      console.warn('Postgres notice:', notice);
    }
  },
  max: 10,
  types: {
    date: {
      to: 1184,
      from: [1082, 1114, 1184],
      serialize: (x: Date | string) => (x instanceof Date ? x.toISOString() : x),
      parse: (x: string) => new Date(x),
    },
    bigint: {
      to: 20,
      from: [20],
      parse: (value: string) => Number.parseInt(value),
      serialize: (value: number) => value.toString(),
    },
  },
  connection: {
    TimeZone: 'UTC',
  },
};

const kysely = new Kysely<DB>({ dialect: new PostgresJSDialect({ postgres: postgres(driverOptions) }) });

const userRepository = new UserRepository(kysely);

describe(MetadataService.name, () => {
  let sut: UserService;
  let mocks: ServiceMocks;

  beforeEach(() => {
    ({ sut, mocks } = newTestService(UserService, { userRepository }));
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should return a user', async () => {
    const user = await userRepository.create({
      email: 'test3@test.com',
      password: 'password',
      name: 'test',
      quotaSizeInBytes: 1_000_000,
      shouldChangePassword: true,
    });

    const result = await sut.get(user.id);
    expect(result).toEqual(
      expect.objectContaining({
        id: user.id,
        name: user.name,
        email: user.email,
        profileImagePath: user.profileImagePath,
        profileChangedAt: user.profileChangedAt,
      }),
    );
  });
});
