import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import gracefulShutdown from 'http-graceful-shutdown';
import Logger from './lib/logger';
import { connectToDatabase, getDBConnection } from './configs/db.config';
import healthCheckRoutes from './routes/healthcheck.route';
import userRoutes from './routes/user.route';
import UserRepository from './repositories/user.repository';
import UserService from './services/user.service';
import UserController from './controllers/user.controller';

const environment = process.env.NODE_ENV || 'local';
const PORT = process.env.PORT || 3000;

export const app = express();
app.use(express.json());

// create a router for /api prefix
const apiRouter = express.Router();
app.use('/api', apiRouter);

// mount routes
apiRouter.use(healthCheckRoutes);
apiRouter.use(userRoutes);

(async () => {
  try {
    // connect to the database before starting the server
    await connectToDatabase();

    // initialize repositories
    const userRepository = new UserRepository(getDBConnection());
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);

    app.set('userController', userController);

    // start the Express server
    const server = app.listen(PORT, () => {
      Logger.info(`🚀 [${environment}] Aris Culala Boilerplate API Service listening on port ${PORT} 🚀`);
    });
  
    // set keepAliveTimeout and headersTimeout for graceful shutdown
    server.keepAliveTimeout = 181 * 1000;
    server.headersTimeout = 185 * 1000;

    // enable graceful shutdown
    gracefulShutdown(server);
  } catch (error) {
    Logger.error(`Error encountered starting application`);
    Logger.error(error);
    process.exit(1);
  }
})();