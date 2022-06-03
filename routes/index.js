const express = require('express');
const userRoute = require('./users');
const tweetRoute = require('./tweets');
const followingRoute = require('./followings');
const app = express();

app.use('/user', userRoute)
app.use('/tweet', tweetRoute)
app.use('/follow', followingRoute)

module.exports = app;