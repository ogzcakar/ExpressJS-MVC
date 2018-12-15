const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

const Logger = require('./Middleware/Logger');
const Router = require('./Routes');

app.use(Logger);
app.use(Router);

app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use( (req, res, next) => {
  next(createError(404));
});

// error handler
app.use( (err, req, res, next) => {

  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
      status:false,
      errors: {
          code: err.code,
          message: err.message
      }
  });

});

module.exports = app;
