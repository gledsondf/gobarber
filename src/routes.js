import { Router } from 'express';
// import User from './app/models/User';

import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

// controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionUserController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
// rota de validação de sessão  toda roto abaixo necessita estar autenticado
routes.post('/sessions', SessionController.store);
// middlewares
routes.use(authMiddleware);

// rota providers
routes.get('/providers', ProviderController.index);
// rota compromissos
routes.post('/appointments', AppointmentController.store);
routes.put('/users', UserController.update);
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name:'Gledson',
//     email:'gledsond5f@gmail.com',
//     password_hash:'123456'
//   });

//   return res.json(user);
// });

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
