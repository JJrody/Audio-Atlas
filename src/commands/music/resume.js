const { useQueue } = require('discord-player');

module.exports = {
  name: 'resume',
  description: 'Resumes the current track if it is paused.',

  run: async (client, voiceChannel) => {
      const guildId = voiceChannel.guild.id;
      const queue = useQueue(guildId);

      if (!queue || !queue.isPlaying()) {
          console.log('No music is currently being played!');
          return;
      }

      if (!queue.node.isPaused()) {
          console.log('Music is not paused, so it cannot be resumed.');
          return;
      }

      try {
          queue.node.setPaused(false);
          console.log('Music has been resumed.');
      } catch (err) {
          console.log('Error resuming the song.');
      }
  },
};
