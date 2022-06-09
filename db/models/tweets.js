const { Model } = require("objection");

class Tweet extends Model {
  static get tableName() {
    return "tweets";
  }

  static get relationMappings() {
    const User = require("./users");
    return {
      user_tweet: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "tweets.userid",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Tweet;
