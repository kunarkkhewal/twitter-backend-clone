const router = require('express').Router();
const Tweet = require('../db/models/tweets');

// GET TWEETS
router.get('/', async (req, res, next) => {
    try {
        const { ids } = req.body;
        const tweets = await Tweet.query()
            .select('tweets.*','user_tweet.id as userid', 'user_tweet.name', 'user_tweet.username')
            .where('userid', 'in', ids)
            .joinRelated('user_tweet');
        res.json(tweets);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
});

// CREATE A NEW TWEET
router.post('/', async (req, res, next) => {
    try {
        const { userid, content } = req.body;
        const tweet = await Tweet.query().insert({userid, content});
        res.json(tweet);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
});

module.exports = router;