const router = require('express').Router();
const followingController = require('../controllers/followings');

router.get('/followers/:userid', followingController.getFollowers);
router.get('/following/:userid', followingController.getFollowings);

router.post('/', followingController.followUser);

module.exports = router;