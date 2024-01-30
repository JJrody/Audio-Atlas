const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: 'join',
    type: 1, // This is for a slash command
    description: 'Joins your voice channel.',
    run: async (client, interaction) => {
        if (!interaction.member.voice.channelId) {
            return interaction.reply({ content: 'You are not in a voice channel!', ephemeral: true });
        }

        //const channel = interaction.guild.channels.cache.get(interaction.member.voice.channelId);
        const channel = interaction.member.voice.channel;
        const guildId = interaction.guild.id;
        try {
            // Join the voice channel using @discordjs/voice
            joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
                selfDeaf: false
            });

            return interaction.reply({ content: `Joined ${channel.name}!` });
        } catch (error) {
            console.error('Error in join command:', error);
            return interaction.reply({ content: 'Unable to join your voice channel!', ephemeral: true });
        }
    },
};

