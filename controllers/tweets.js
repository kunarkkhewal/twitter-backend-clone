const Tweet = require('../db/models/tweets');
const followingController = require('../controllers/followings');

// GET USER TWEETS
exports.getUserTweets =  async (req, res, next) => {
    try {
        const { id } = req.params;
        const tweets = await Tweet.query()
            .select('tweets.*','user_tweet.id as userid', 'user_tweet.name', 'user_tweet.username')
            .where('userid', '=', id)
            .joinRelated('user_tweet');
        res.json(tweets);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
};

// GET FEED TWEETS
exports.getFeedTweets =  async (req, res, next) => {
    try {
        const { id } = req.params;
        let followings = await followingController.getUserFollowings(id);
        const tweets = await Tweet.query()
            .select('tweets.*','user_tweet.id as userid', 'user_tweet.name', 'user_tweet.username')
            .where('userid', 'in', followings)
            .joinRelated('user_tweet');
        res.json(tweets);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
};

// CREATE A NEW TWEET
exports.createTweet =  async (req, res, next) => {
    try {
        const { userid, content } = req.body;
        const tweet = await Tweet.query().insert({userid, content});
        res.json(tweet);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
};