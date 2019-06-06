import jwt from 'jsonwebtoken';
import config from '../../../config';
import User from '../../db/schemas/User';

export default (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then(user => {
      console.log(password, user.password, password === user.password);
      if (password === user.password) {
        const token = jwt.sign(
          { firstname: user.firstname, lastname: user.lastname, email },
          config.jwt_secret,
          {
            expiresIn: '1m'
          }
        );
        res.send({
          firstname: user.firstname,
          lastname: user.lastname,
          token,
          email
        });
      } else {
        res.send({ Error: 'Invalid credentials.' });
      }
    })
    .catch(err => next(err));
};
