import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';

import { Role } from '@hb/types';

import { UsersService, TokenService, AuthService } from '../services';

import { AuthController } from '.';

const testUser = {
  id: 123,
  email: 'some@example.com',
  password: 'somePassword',
  role: Role.Admin,
};
const testTokens = {
  refreshToken: 'refresh_token',
  accessToken: 'access_token',
};

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  let tokenService: TokenService;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            validateUser: jest
              .fn()
              .mockImplementation(({ login, password }) => {
                return Promise.resolve(
                  login === testUser.email && testUser.password === password
                    ? testUser
                    : null,
                );
              }),
          },
        },
        {
          provide: TokenService,
          useValue: {
            createRefreshToken: jest.fn().mockResolvedValue({ id: 5 }),
            signTokens: jest.fn().mockResolvedValue(testTokens),
            extractTokenFromBearer: jest.fn((v) => v),
            extractIdFromToken: jest.fn().mockReturnValue(10),
            revokeRefreshToken: jest.fn(),
            isRefreshTokenRevoked: jest.fn().mockResolvedValue(false),
            refreshToken: jest.fn().mockResolvedValue({ id: 5 }),
          },
        },
        {
          provide: UsersService,
          useValue: {
            findById: jest.fn().mockImplementation((id) => {
              return Promise.resolve(id === testUser.id ? testUser : null);
            }),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
    tokenService = module.get<TokenService>(TokenService);
    userService = module.get<UsersService>(UsersService);
  });

  describe('SignIn method', () => {
    it('Normal work', async () => {
      const ip = '1.2.3.4';
      const userAgent = 'My random user agent';

      const { email, password } = testUser;

      const result = await authController.signIn(
        { email, password },
        ip,
        userAgent,
      );

      expect(authService.validateUser).toBeCalled();
      expect(
        (authService.validateUser as any).mock.results[0].value,
      ).resolves.toBe(testUser);

      expect(tokenService.createRefreshToken).toBeCalled();
      expect((tokenService.createRefreshToken as any).mock.calls[0][0]).toEqual(
        {
          userId: testUser.id,
          userAgent,
          ip,
        },
      );

      expect(tokenService.signTokens).toBeCalled();
      expect((tokenService.signTokens as any).mock.calls[0][0]).toEqual({
        id: testUser.id,
        tokenId: 5,
        email: testUser.email,
        role: testUser.role,
      });

      expect(result).toEqual(testTokens);
    });

    it('UnauthorizedError', async () => {
      try {
        await authController.signIn({
          email: 'foo',
          password: 'bar',
        });
      } catch (err) {
        expect(err).toBeInstanceOf(UnauthorizedException);
        expect(err.message).toBe('Wrong username or password');
      }
    });
  });

  describe('SignOut', () => {
    it('Normal work', async () => {
      const fakeToken = 'access__token';

      await authController.signOut(`Bearer ${fakeToken}`);

      expect(tokenService.extractIdFromToken).toBeCalled();
      expect(tokenService.extractIdFromToken).toBeCalledWith(fakeToken);

      expect(tokenService.revokeRefreshToken).toBeCalled();
      expect(tokenService.revokeRefreshToken).toBeCalledWith(10);
    });
  });

  describe('refreshToken', () => {
    it('Normal work', async () => {
      const fakeToken = 'refresh_token';
      const ip = '1.2.3.4';
      const userAgent = 'My random user agent';

      const result = await authController.refreshToken(
        fakeToken,
        { id: testUser.id },
        ip,
        userAgent,
      );

      expect(tokenService.extractIdFromToken).toBeCalledWith(fakeToken);
      expect(tokenService.isRefreshTokenRevoked).toBeCalledWith(10);
      expect(userService.findById).toBeCalledWith(testUser.id);
      expect((tokenService.refreshToken as any).mock.calls[0][0]).toBe(10);
      expect((tokenService.refreshToken as any).mock.calls[0][1]).toEqual({
        userId: testUser.id,
        userAgent,
        ip,
      });
      expect((tokenService.signTokens as any).mock.calls[0][0]).toEqual({
        id: testUser.id,
        tokenId: 5,
        email: testUser.email,
        role: testUser.role,
      });

      expect(result).toEqual(testTokens);
    });

    it('For revoked token', async () => {
      expect.assertions(1);
      jest.spyOn(tokenService, 'isRefreshTokenRevoked').mockResolvedValue(true);

      try {
        await authController.refreshToken('some_token', { id: testUser.id });
      } catch (err) {
        expect(err).toBeInstanceOf(UnauthorizedException);
      }
    });

    it('For deleted user', async () => {
      expect.assertions(1);

      try {
        await authController.refreshToken('some_token', { id: 243 });
      } catch (err) {
        expect(err).toBeInstanceOf(UnauthorizedException);
      }
    });
  });
});
