const router = require('express').Router();
const tweetController = require('../controllers/tweets');

router.get('/user/:id', tweetController.getUserTweets);
router.get('/feed/:id', tweetController.getFeedTweets);

router.post('/', tweetController.createTweet);

module.exports = router;