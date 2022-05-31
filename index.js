const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;

router.get('/', (req, res, next) => {
    res.send('Hello World');
    return next();
})

app.use(router);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
})