const router = require('express').Router();
const Following = require('../db/models/followings');

// GET FOLLOWERS
router.get('/followers/:userid', async (req, res, next) => {
    try {
        const { userid } = req.params;
        const followers = await Following.query().where({following: userid});
        res.json(followers);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
});

// GET FOLLOWINGS
router.get('/following/:userid', async (req, res, next) => {
    try {
        const { userid } = req.params;
        const followers = await Following.query().where({follower: userid});
        res.json(followers);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
});

// FOLLOW A USER
router.post('/', async (req, res, next) => {
    try {
        const { follower, following } = req.body;
        const follow = await Following.query().insert({follower, following});
        res.json(follow);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
});

module.exports = router;