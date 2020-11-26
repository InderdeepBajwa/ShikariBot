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

app.use('/app', express.static('web/routes/app.html'));
app.use('/administration', express.static('web/routes/administration.html'));
app.use('/custom-responses', express.static('web/routes/custom-responses.html'));

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});

