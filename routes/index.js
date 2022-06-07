const indexRouter = require('express').Router();

const userRouter = require('./user');
const movieRouter = require('./movies');

const auth = require('../middlewares/auth');
const { createUserValidation, loginValidation } = require('../middlewares/validation');

const NotFoundError = require('../errors/NotFoundError');

const { login, createUser, logout } = require('../controllers/user');

indexRouter.post('/signup', createUserValidation, createUser);
indexRouter.post('/signin', loginValidation, login);
indexRouter.get('/signout', logout);

indexRouter.use(auth);

indexRouter.use('/users', userRouter);
indexRouter.use('/movies', movieRouter);

indexRouter.use((req, res, next) => {
  next(new NotFoundError('Нет такой страницы'));
});

module.exports = indexRouter;
