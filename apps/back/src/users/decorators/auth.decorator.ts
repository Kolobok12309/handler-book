import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Role } from '@hb/types';

import { RolesGuard, JwtGuard } from '../guards';

export const Auth = (roles: Role | Role[]) =>
  applyDecorators(
    SetMetadata('roles', [].concat(roles)),
    UseGuards(JwtGuard, RolesGuard),
    ApiBearerAuth(),
    ApiForbiddenResponse({ description: 'Not enough rights' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
