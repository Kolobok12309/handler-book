import { User } from '../user.interface';

export interface Token {
  id: number;

  /**
   * Пользователь токена
   */
  user?: Omit<User, 'password'>;

  /**
   * Id пользователя
   */
  userId: number;

  /**
   * Заголовок userAgent используемый при создании токена
   */
  userAgent?: string;

  /**
   * IP - адрес используемый при создании токена
   */
  ip?: string;

  /**
   * Дата создания токена
   */
  createdAt: Date;
}
