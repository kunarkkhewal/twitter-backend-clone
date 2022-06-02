const { Model } = require('objection');

class Tweet extends Model {
    static get tableName() {
        return 'tweets';
    }
}

module.exports = Tweet;