import { Router } from 'express';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionUserController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.put('/users', UserController.update);
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name:'Gledson',
//     email:'gledsond5f@gmail.com',
//     password_hash:'123456'
//   });

//   return res.json(user);
// });

export default routes;
