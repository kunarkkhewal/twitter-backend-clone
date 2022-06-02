const express = require('express');
const dbSetup = require('./db/db-setup');
const User = require('./db/models/users');

const app = express();
app.use(express.json());
dbSetup();
const router = express.Router();
const PORT = process.env.PORT || 8080;

router.get('/user/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.query().findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error)
    }
    return next();
})

app.use(router);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
})