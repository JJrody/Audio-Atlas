const { useMainPlayer, QueryType } = require('discord-player');
const { getVoiceConnection, joinVoiceChannel } = require('@discordjs/voice');

const player = useMainPlayer();

module.exports = {
    name: 'play',
    description: 'Plays and enqueues track(s) of the query provided.',

    run: async (client, voiceChannel, query) => {
        if (!voiceChannel) {
            return console.log('You need to be in a voice channel to play music!');
        }

        const guildId = voiceChannel.guild.id;
        let connection = getVoiceConnection(guildId);

        if (!connection) {
            connection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: guildId,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
            });
        }

        const queue = await player.nodes.create(voiceChannel.guild, {
            metadata: {
                channel: voiceChannel
            }
        });
        queue.createDispatcher(connection);
        if (!queue.connection) await queue.connect(voiceChannel);

        try {
            const track = await player.search(query, {
                requestedBy: client.user // Change this to the bot user as there is no interaction.user in voice commands
            }).then(x => x.tracks[0]);

            if (!track) {
                return console.log(`❌ | Track **${query}** not found!`);
            }

            queue.play(track);
            console.log(`⏱️ | Loading track **${track.title}**!`);
        } catch (error) {
            console.error(error);
            console.log('There was an error trying to execute that command!');
        }
    },
};
