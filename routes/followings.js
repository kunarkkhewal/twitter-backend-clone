const router = require("express").Router();
const followingController = require("../controllers/followings");

router.get("/followers/:userid", followingController.getFollowers);
router.get("/following/:userid", followingController.getFollowings);
router.get("/isfollowing/:follower/:following", followingController.isFollowing);

router.post("/", followingController.followUser);
router.post("/unfollow", followingController.unfollowUser);

module.exports = router;
