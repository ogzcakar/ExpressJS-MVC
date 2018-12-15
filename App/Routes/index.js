const express = require('express');
const app = express();

const homeRouter = require('./HomeRouter');
const userRouter = require('./userRouter');

app.use('/'     , homeRouter);
app.use('/user' , userRouter);

module.exports = app;
