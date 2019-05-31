import jwt from 'jsonwebtoken';
import config from '../../../config';

export const login = (req, res, next) => {
  const { email, password } = req.body;
  if (email === 'my@email.com' && password === 'Password') {
    const sessionKey = jwt.sign(
      { firstName: 'Petar', lastName: 'Petrov', email },
      config.jwt_secret,
      {
        expiresIn: '1m'
      }
    );
    res.send({
      firstName: 'Petar',
      lastName: 'Petrov',
      sessionKey,
      email
    });
  } else {
    res.send({ Error: 'Invalid credentials.' });
  }
};
