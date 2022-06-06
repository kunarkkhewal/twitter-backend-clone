const Following = require('../db/models/followings');

// GET FOLLOWERS
exports.getFollowers = async (req, res, next) => {
    try {
        const { userid } = req.params;
        const followers = await Following.query()
            .where({following: userid})
            .withGraphFetched('user_follower')
            .withGraphFetched('user_following');
        res.json(followers);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
};

// GET FOLLOWINGS
exports.getFollowings = async (req, res, next) => {
    try {
        const { userid } = req.params;
        const followers = await Following.query()
            .where({follower: userid})
            .withGraphFetched('user_follower')
            .withGraphFetched('user_following');
        res.json(followers);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
};

// FOLLOW A USER
exports.followUser = async (req, res, next) => {
    try {
        const { follower, following } = req.body;
        const follow = await Following.query().insert({follower, following});
        res.json(follow);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
};