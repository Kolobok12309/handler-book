import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { TokenUser } from '../interfaces';

export const User = createParamDecorator(
  (data: unknown, context: ExecutionContext): TokenUser => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
