import jwt from 'jsonwebtoken';
import {promisify} from 'util';

import authConfig from '../../config/auth';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({ "error": "Token não "});
  }

  const [,token] = authHeader.split(' ');



  return next();
};