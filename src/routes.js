import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

// controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionUserController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
// rota de validação de sessão  toda roto abaixo necessita estar autenticado
routes.post('/sessions', SessionController.store);

// middlewares
routes.use(authMiddleware);

routes.put('/users', UserController.update);
// rota providers
routes.get('/providers', ProviderController.index);
// rota compromissos
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

routes.get('/schedules', ScheduleController.index);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
