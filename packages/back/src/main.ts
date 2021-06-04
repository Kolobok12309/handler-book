import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import debug from 'debug';

import { version } from '~/package.json';

import { DuplicationTypeormExceptionsFilter } from './db';
import { ErrorInterceptor } from './error.interceptor';
import { AppModule } from './app.module';

declare const module: any;

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const SENTRY_DSN = process.env.SENTRY_DSN;
const log = debug('@hb/back:init');

async function bootstrap() {
  log(`Init application environment:${process.env.NODE_ENV}`);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser());

  log('Enable CORS');
  app.enableCors({
    origin: '*',
  });

  const { httpAdapter } = app.get(HttpAdapterHost);

  log('Add global filters');
  app.useGlobalFilters(new DuplicationTypeormExceptionsFilter(httpAdapter));
  log('Add global interceptors');
  app.useGlobalInterceptors(new ErrorInterceptor(SENTRY_DSN));

  // Documentation by swagger
  log('Init documentation');
  const options = new DocumentBuilder()
    .setTitle('Handler book')
    .setDescription('The auth API description')
    .setVersion(version)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);

  // Global validation by class-validator
  log('Add global pipes');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  log(`Start application ${HOST}:${PORT}`);
  await app.listen(PORT, HOST, () => log('Application started'));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
