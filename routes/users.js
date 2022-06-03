const router = require('express').Router();
const User = require('../db/models/users');

// GET USER INFORMATION
//BY USERNAME
router.get('/username/:username', async (req, res, next) => {
    try {
        const { username } = req.params;
        const user = await User.query().findOne({username});
        res.json(user);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
});

//BY ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.query().findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
});

// CREATE A NEW USER
router.post('/', async (req, res, next) => {
    try {
        const { name, username, password, location } = req.body;
        const user = await User.query().insert({name, username, password, location});
        res.json(user);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
});

module.exports = router;