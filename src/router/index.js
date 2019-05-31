import { Router } from 'express';
import { login } from '../controllers/login';

const router = Router();
router.use('/ping', (req, res, next) => {
  res.send('You say "ping", I say "pong"');
});

router.post('/login', login);

export default router;
