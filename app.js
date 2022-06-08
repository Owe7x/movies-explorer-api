const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const indexRouter = require('./routes/index');

const { cors } = require('./middlewares/cors');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./middlewares/limiter');

const { PORT, DATABSE } = require('./utils/const');

const app = express();

mongoose.connect(DATABSE);

app.use(requestLogger);
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

app.use(cors);
app.use(indexRouter);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT);
