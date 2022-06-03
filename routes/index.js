const express = require('express');
const userRoute = require('./users');
const app = express();

app.use('/user', userRoute)

module.exports = app;