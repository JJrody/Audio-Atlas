const speech = require('discord-speech-recognition');
const voiceCommandHandler = require('./voiceCommandHandler');
const { performance } = require('perf_hooks'); 

module.exports.startListening = (client, voiceChannel) => {
    client.on('speech', (msg) => {
        const wakeWord = "atlas";
        //const voiceCommanderRoleName = "botController"; // Replace with the name of your specific role

        // Check if the user has the voice commander role
        //const hasVoiceCommanderRole = msg.member.roles.cache.some(role => role.name === voiceCommanderRoleName);

        // Proceed only if the message starts with the wake word and the user has the required role
        if (msg.content.toLowerCase().startsWith(wakeWord)) {
            const voiceChannel = msg.member.voice.channel;
            voiceCommandHandler(client, msg.content, voiceChannel);
        }
    });
};
