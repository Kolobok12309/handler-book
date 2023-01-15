import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TokenUser } from '@hb/types';

export const User = createParamDecorator(
  (data: string, context: ExecutionContext): TokenUser => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
