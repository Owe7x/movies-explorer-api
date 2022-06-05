require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DATABSE = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/moviesdb';

module.exports = {
  PORT,
  DATABSE,
};
