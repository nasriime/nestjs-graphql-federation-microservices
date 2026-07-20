import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

jest.mock('@nestjs/graphql', () => {
  const original = jest.requireActual('@nestjs/graphql');
  return {
    ...original,
    GraphQLModule: {
      forRoot: () => ({
        module: class {},
      }),
      forRootAsync: () => ({
        module: class {},
      }),
    },
  };
});

describe('AppController (e2e)', () => {
  let app: INestApplication;

  jest.setTimeout(30000);

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
