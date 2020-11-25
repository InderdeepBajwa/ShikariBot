// Library requirements
const dotenv = require('dotenv');
dotenv.config();

// Importing Express (web server)

const express = require('express');
const app = express();
const port = process.env.WEB_SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Shikari Bot Hello');
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
