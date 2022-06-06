const router = require('express').Router();
const userController = require('../controllers/users');

router.get('/username/:username', userController.getUserByUsername);
router.get('/:id', userController.getUserById);
router.get('/ifusernameexists/:username', userController.ifUsernameExists);

router.post('/', userController.createUser);

module.exports = router;