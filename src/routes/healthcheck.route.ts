/**
 * healthcheck route
 */
import express from 'express';

import { HttpStatusCode, HttpStatusName } from '../lib/httpstatus';

const router = express.Router();

router.get('/healthcheck/liveness', function (req, res) {
  return res
    .status(HttpStatusCode.OK)
    .json({ status: HttpStatusName[HttpStatusCode.OK] });
});

router.get('/healthcheck/readiness', async function (req, res) {
  //TODO: add dependencies to check here e.g. database, redis, etc.
  return res
    .status(HttpStatusCode.OK)
    .json({ status: HttpStatusName[HttpStatusCode.OK] });
});

export default router;
