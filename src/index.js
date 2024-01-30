require('dotenv').config();
const { Client, GatewayIntentBits} = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const { addSpeechEvent} = require("discord-speech-recognition");
const { Player} = require('discord-player');
const { readdirSync } = require('fs');
const eventHandler = require('./Handlers/eventHandler');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
});
addSpeechEvent(client);
client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
    },
});
client.player.extractors.loadDefault();
eventHandler(client);


client.login(process.env.TOKEN);

