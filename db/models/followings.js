const { Model } = require("objection");

class Following extends Model {
  static get tableName() {
    return "followings";
  }

  static get relationMappings() {
    const User = require("./users");
    return {
      user_following: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "followings.follower",
          to: "users.id",
        },
      },
      user_follower: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "followings.following",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Following;
