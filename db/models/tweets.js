const { Model } = require("objection");

class Tweet extends Model {
  static get tableName() {
    return "tweets";
  }

  static get relationMappings() {
    const User = require("./users");
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        // filter: query => query.select('username', 'name'),
        join: {
          from: "tweets.userid",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Tweet;
