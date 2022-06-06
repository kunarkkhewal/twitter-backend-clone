const User = require('../db/models/users');

// GET USER INFORMATION
//BY USERNAME
exports.getUserByUsername = async (req, res, next) => {
    try {
        const { username } = req.params;
        const user = await User.query().findOne({username});
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
    return next();
};

//BY ID
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
        const user = await User.query().findOne({username})
        if (user && user.username) {
            ifUserExists = true;
        }
        res.json(ifUserExists);
    } catch (error) {
        res.status(500).json(error);
    }
}

// CREATE A NEW USER
exports.createUser = async (req, res, next) => {
    try {
        const { name, username, password, location } = req.body;
        const user = await User.query().insert({name, username, password, location});
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
    return next();
};