import User from '../../db/schemas/User';

export default (req, res, next) => {
  console.log(req.body);
  User.create(req.body)
    .then(data => res.send(data))
    .catch(err => next(err));
};
