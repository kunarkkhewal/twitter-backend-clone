const Tweet = require("../db/models/tweets");
const followingController = require("../controllers/followings");

exports.getUserTweets = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tweets = await Tweet.query()
      .select(
        "tweets.*"
      )
      .where("userid", "=", id)
      .withGraphFetched("user(defaultSelects)");
    res.json(tweets);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.getFeedTweets = async (req, res, next) => {
  try {
    const { id } = req.params;
    let followings = await followingController.getUserFollowings(id);
    const tweets = await Tweet.query()
      .select(
        "tweets.*"
      )
      .where("userid", "in", followings)
      .withGraphFetched("user(defaultSelects)");
    res.json(tweets);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.createTweet = async (req, res, next) => {
  try {
    const { userid, content } = req.body;
    const tweet = await Tweet.query().insert({ userid, content });
    res.json(tweet);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};
