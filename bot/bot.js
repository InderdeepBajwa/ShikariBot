// Discordjs library import
const Discord = require('discord.js');
const client = new Discord.Client();

// Log bot up time
client.once('ready', () => {
    console.log('Ready!');
});

// Constantly setting environment as dev (temporary)
const NODE_ENV = 'dev';

// Checking if node environment is production or dev
if (NODE_ENV === 'production') {
    client.login(process.env.PROD_SECRET_KEY);
}
else {
    client.login(process.env.DEV_SECRET_KEY);
}

// Importing configuration and bot essential files
const bot_config = require('./config.json');


/*
    * Below file contains code for the bot. The code is separated as:
        - Essential message tooling
        - Mod commands
*/

client.on('message', message => {

    // /////////////// Essential message tooling /////////////// //
    // Lowercasing for case insensitivity
    const MESSAGELOWERCASE = message.content.toLowerCase();
    


});
