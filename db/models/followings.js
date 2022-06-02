const { Model } = require('objection');

class Following extends Model {
    static get tableName() {
        return 'followings';
    }
}

module.exports = Following;