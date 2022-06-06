const router = require('express').Router();
const tweetController = require('../controllers/tweets');

router.get('/', tweetController.getTweets);

router.post('/', tweetController.createTweet);

module.exports = router;