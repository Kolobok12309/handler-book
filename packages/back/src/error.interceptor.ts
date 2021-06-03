import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import { catchError } from 'rxjs/operators';
import {
  CallHandler,
  Catch,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { throwError } from 'rxjs';
import debug from 'debug';

import { version } from '~/package.json';

const log = debug('app:error');
const isProd = process.env.NODE_ENV === 'production';

@Catch()
export class ErrorInterceptor implements NestInterceptor {
  isSentryEnabled = false;

  constructor(dsn) {
    log('Init ErrorInterceptor');

    if (isProd && dsn) {
      log(`Init Sentry ${dsn}`);

      this.isSentryEnabled = true;

      Sentry.init({
        dsn,
        release: `back-${version}`,
        integrations: [new RewriteFrames()],
      });
    }
  }

  intercept(context: ExecutionContext, next: CallHandler) {
    const errorHandler = (err) => {
      if (this.isSentryEnabled) {
        log('Sentry capture exception');
        Sentry.captureException(err);
      }

      log(err);

      return throwError(err);
    };

    return next.handle().pipe(catchError((err) => errorHandler(err)));
  }
}
