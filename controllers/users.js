const User = require("../db/models/users");
const Following = require("../db/models/followings");

exports.getUserByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.query()
      .select(
        "users.*",
        User.relatedQuery("user_follower").count().as("followers"),
        User.relatedQuery("user_following").count().as("followings")
      )
      .findOne({ username });
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.ifUsernameExists = async (req, res, next) => {
  try {
    const { username } = req.params;
    let ifUserExists = false;
    const user = await User.query().findOne({ username });
    if (user && user.username) {
      ifUserExists = true;
    }
    res.json(ifUserExists);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getNotFollowedUsers = async (req, res, next) => {
  try {
    const { id, offset, limit } = req.params;
    const users = await User.query()
      .select("users.id", "users.name", "users.username")
      .where(
        "users.id",
        "not in",
        Following.query().select("following").where("follower", "=", id)
      )
      .where("users.id", "!=", id)
      .offset(offset)
      .limit(limit);
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, username, password, location } = req.body;
    const user = await User.query().insert({
      name,
      username,
      password,
      location,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
  return next();
};
