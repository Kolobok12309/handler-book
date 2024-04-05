import { Role } from './role.interface';

export interface User {
  id: number;

  /**
   * Логин пользователя
   */
  name: string;

  /**
   * Email пользователя
   */
  email: string;

  /**
   * Пароль
   */
  password: string;

  /**
   * Роль
   */
  role: Role;

  /**
   * Дата регистрации
   */
  createdAt: Date;
}
