require('dotenv/config');

const { Client, IntentsBitField } = require('discord.js');
const path = require('path');
const { CommandKit } = require('commandkit');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

new CommandKit({
    client,
    eventsPath: path.join(__dirname, 'events'),
    commandsPath:  path.join(__dirname, 'commands')
});

client.login(process.env.TOKEN);