import { Router } from 'express';
import login from '../controllers/login/login';
import signup from '../controllers/login/signup';

const router = Router();
router.use('/ping', (req, res, next) => {
  res.send('You say "ping", I say "pong"');
});

router.post('/login', login);
router.post('/signup', signup);

export default router;
