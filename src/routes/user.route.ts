/**
 * user route
 */
import express from 'express';
import {
  CreateUserSchema,
  GetUsersParamSchema,
  UpdatePasswordSchema,
  UpdateUser2FASchema,
  UserIdParamSchema,
} from '../resources/user.resource';
import expressValidation from '../middlewares/express_validator.middleware';

import { app } from '../index';

const router = express.Router();

router.post(
  '/users',
  expressValidation({
    body: CreateUserSchema,
  }),
  (req, res) => app.get('userController').createUser(req, res),
);

router.get('/users',
expressValidation({
  body: GetUsersParamSchema,
}),
(req, res) => app.get('userController').getUsers(req, res));

router.get('/users/:id',
  expressValidation({
    params: UserIdParamSchema,
  }),
  (req, res) => app.get('userController').getUser(req, res));

router.put(
  '/users/:id/password',
  expressValidation({
    params: UserIdParamSchema,
    body: UpdatePasswordSchema,
  }),
  (req, res) => app.get('userController').updateUserPassword(req, res),
);

router.put(
  '/users/:id/2fa',
  expressValidation({
    params: UserIdParamSchema,
    body: UpdateUser2FASchema,
  }),
  (req, res) => app.get('userController').updateUser2FA(req, res),
);

router.put(
  '/users/:id/restore',
  expressValidation({
    params: UserIdParamSchema,
  }),
  (req, res) => app.get('userController').restoreUser(req, res),
);

router.delete('/users/:id',
  expressValidation({
    params: UserIdParamSchema,
  }),
  (req, res) => app.get('userController').deleteUser(req, res),
);

export default router;
