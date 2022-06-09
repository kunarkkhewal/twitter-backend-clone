const Following = require("../db/models/followings");

exports.getFollowers = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const followers = await Following.query()
      .where({ following: userid })
      .withGraphFetched("user_follower")
      .withGraphFetched("user_following");
    res.json(followers);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.getFollowings = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const followers = await Following.query()
      .where({ follower: userid })
      .withGraphFetched("user_follower")
      .withGraphFetched("user_following");
    res.json(followers);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.getUserFollowings = async (userid) => {
  let followings = await Following.query()
    .select("following")
    .where("follower", "=", userid);
  followings = followings.map((user) => user.following);
  followings.push(Number(userid));
  return followings;
};

exports.followUser = async (req, res, next) => {
  try {
    const { follower, following } = req.body;
    if (follower == following) {
      res.status(200).json({ message: "Cannot follow yourself" });
      return next();
    }
    const follow = await Following.query().insert({ follower, following });
    res.json(follow);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.unfollowUser = async (req, res, next) => {
  try {
    const { follower, following } = req.body;
    const follow = await Following.query()
      .delete()
      .where({ follower })
      .where({ following });
    res.json(follow);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.isFollowing = async (req, res, next) => {
  try {
    const { follower, following } = req.params;
    const response = await Following.query()
      .where("follower", "=", follower)
      .where("following", "=", following);
    const isFollowing = response.length ? true : false;
    res.json(isFollowing);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};
