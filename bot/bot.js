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
const custom_responses = require('./interfaces/custom-responses.json');
const administration_reponses = require('./interfaces/administration.json');


/*
    * Below file contains code for the bot. The code is separated as:
        - Essential message tooling (to be used all across the code)
        - Mod commands
*/

client.on('message', message => {

    // /////////////// Essential message tooling /////////////// //
    // Lowercasing for case insensitivity
    const MESSAGE_LOWERCASE = message.content.toLowerCase();
    const SERVER_ID = message.guild.id;
    const PREFIX = bot_config[SERVER_ID].prefix;
    const SUFFIx = bot_config[SERVER_ID].suffix;

    // /////////////// Administration /////////////// //
    // Ban: Ban user
    //  - (Optional) message to the user
    if (MESSAGE_LOWERCASE.startsWith(`${PREFIX} ban`)) {
        // TODO: ban user
        return message.channel.send(administration_reponses[SERVER_ID][ban-response])
    }
    // Kick: Kick user
    //  - (Optional) message to the user
    if (MESSAGE_LOWERCASE.startsWith(`${PREFIX} kick`)) {
        // TODO: ban user
        return message.channel.send(administration_reponses[SERVER_ID][kick-response])
    }

    // /////////////// MESSAGE RESPONSES /////////////// //
    // Contains: If message contains this message, then: reply with a defined message or react with a particular emoji
    if (MESSAGE_LOWERCASE.includes(custom_responses[SERVER_ID].contains[CHECK ALL OF THE MESSAGES HERE])) {
        return MESSAGE_LOWERCASE.includes(custom_responses[SERVER_ID].contains[CHECK ALL OF THE MESSAGES HERE])
            .startsWith('react::')
            ? message.react('WHATEVER EMOJI IS DEFINED')
            : message.channel.send('WHATEVER MESSAGE IS DEFINED');
    }

    // Starts with: If message starts with this message, then: reply with a defined message or react with a particular emoji
    if (MESSAGE_LOWERCASE.startsWith(custom_responses[SERVER_ID].contains[CHECK ALL OF THE MESSAGES HERE])) {
        return MESSAGE_LOWERCASE.startsWith(custom_responses[SERVER_ID].contains[CHECK ALL OF THE MESSAGES HERE])
            .startsWith('react::')
            ? message.react('WHATEVER EMOJI IS DEFINED')
            : message.channel.send('WHATEVER MESSAGE IS DEFINED');
    }

    // Ends with: If message ends with this message, then: reply with a defined message or react with a particular emoji
    if (MESSAGE_LOWERCASE.endsWith(custom_responses[SERVER_ID].contains[CHECK ALL OF THE MESSAGES HERE])) {
        return MESSAGE_LOWERCASE.endsWith(custom_responses[SERVER_ID].contains[CHECK ALL OF THE MESSAGES HERE])
            .startsWith('react::')
            ? message.react('WHATEVER EMOJI IS DEFINED')
            : message.channel.send('WHATEVER MESSAGE IS DEFINED');
    }



});
