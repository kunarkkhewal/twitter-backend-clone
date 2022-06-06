const User = require('../db/models/users');

// GET USER INFORMATION
//BY USERNAME
exports.getUserByUsername = async (req, res, next) => {
    try {
        const { username } = req.params;
        const user = await User.query().findOne({username});
        res.json(user);
    } catch (error) {
        res.status(500).json(error)
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
        res.status(500).json(error)
    }
    return next();
};

// CREATE A NEW USER
exports.createUser = async (req, res, next) => {
    try {
        const { name, username, password, location } = req.body;
        const user = await User.query().insert({name, username, password, location});
        res.json(user);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
};

// module.exports = router;