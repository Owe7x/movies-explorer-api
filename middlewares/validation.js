const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const urlValidation = (value) => {
  if (validator.isURL(value)) {
    return value;
  }
  return value.message('Неправильный формат ссылки');
};

exports.userInfoValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required().min(2).max(30),
  }),
});

exports.validateMovieDelete = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().length(24).hex(),
  }),
});

exports.validateMovieCreate = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(urlValidation),
    trailerLink: Joi.string().required().custom(urlValidation),
    thumbnail: Joi.string().required().custom(urlValidation),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

exports.createUserValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});
exports.loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message('Hекорректные имя пользователя или email'),
    password: Joi.string().required().min(3)
      .message('Hекорректные имя пользователя или email'),
  }),
});
