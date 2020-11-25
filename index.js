// Library requirements
const dotenv = require('dotenv');
dotenv.config();

// Importing Express (web server)

const express = require('express');
const app = express();
const port = process.env.WEB_SERVER_PORT;

app.use('/', express.static('web/public'));

app.get('/login', (req, res) => {
    console.log('Currently at /login');
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});

