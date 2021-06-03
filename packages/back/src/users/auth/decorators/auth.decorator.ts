import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { Role } from '../..';

import { RolesGuard, JwtGuard } from '../guards';

export const Auth = (roles: Role[]) =>
  applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(JwtGuard, RolesGuard),
    ApiBearerAuth(),
    ApiForbiddenResponse({ description: 'Not enough rights' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
