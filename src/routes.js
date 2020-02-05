import { Router } from 'express';
import User from './app/models/User';

import UserController from './app/controllers/UserController';
const routes = new Router();

routes.post('/users', UserController.store);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name:'Gledson',
//     email:'gledsond5f@gmail.com',
//     password_hash:'123456'
//   });

//   return res.json(user);
// }); 

export default routes;
