const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const Following = require("./followings");
    return {
      user_following: {
        relation: Model.HasManyRelation,
        modelClass: Following,
        join: {
          from: "users.id",
          to: "followings.follower",
        },
      },
      user_follower: {
        relation: Model.HasManyRelation,
        modelClass: Following,
        join: {
          from: "users.id",
          to: "followings.following",
        },
      },
    };
  }

  static modifiers = {
    defaultSelects(query) {
      query.select('name', 'username');
    }
  };
}

module.exports = User;
