/**
 * user specific interfaces
 */
import { Pagination } from "./common.interface";

export enum UserErrorCode {
  CREATE_NEW_USER_ERROR = 'CREATE_NEW_USER_ERROR',
  USER_NOT_FOUND_ERROR = 'USER_NOT_FOUND_ERROR',
  USER_UPDATE_ERROR = 'USER_UPDATE_ERROR',
  USER_PASSWORD_UPDATE_ERROR = 'USER_PASSWORD_UPDATE_ERROR',
  USER_2FA_UPDATE_ERROR = 'USER_2FA_UPDATE_ERROR',
  USER_DELETED_ERROR = 'USER_DELETED_ERROR',
  GET_USERS_ERROR = 'GET_USERS_ERROR',
  USER_DATABASE_ERROR = 'USER_DATABASE_ERROR',
  USER_CURRENT_PASSWORD_DOES_NOT_MATCH_ERROR = 'USER_CURRENT_PASSWORD_DOES_NOT_MATCH_ERROR',
  USER_NEW_PASSWORD_DOES_NOT_MATCH = 'USER_NEW_PASSWORD_DOES_NOT_MATCH',
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
  isDeleted: boolean;
  is2FAEnable: boolean;
}

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
}

export interface UpdateUserPassword {
  currentPassword: string;
  newPassword: string;
  reEnterNewPassword: string;
}

export interface UpdateUserDeleted {
  isDeleted: boolean;
}

export interface UpdateUser2FA {
  is2FAEnable: boolean;
}

export interface FindUsers {
  page: number;
  limit: number;
  isDeleted: boolean;
  is2FAEnable: boolean;
}

export interface ListUsers {
  pagination: Pagination;
  users: User[];
}