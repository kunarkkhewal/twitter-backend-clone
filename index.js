const express = require('express');
const routes = require('./routes');
const dbSetup = require('./db/db-setup');

const PORT = process.env.PORT || 8080;
const app = express();
dbSetup();

app.use(express.json());
app.use('/', routes)

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});