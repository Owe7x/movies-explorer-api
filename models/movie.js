const validator = require('validator');
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (avatar) => validator.isURL(avatar),
      message: 'Некорректная ссылка!',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (avatar) => validator.isURL(avatar),
      message: 'Некорректная ссылка!',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (avatar) => validator.isURL(avatar),
      message: 'Некорректная ссылка!',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
    select: false,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);