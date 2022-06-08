const movieRouter = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movie');
const { validateMovieCreate, validateMovieDelete } = require('../middlewares/validation');

movieRouter.get('/', getMovies);
movieRouter.post('/', validateMovieCreate, createMovie);
movieRouter.delete('/:id', validateMovieDelete, deleteMovie);

module.exports = movieRouter;
