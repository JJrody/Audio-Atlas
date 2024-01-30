const { useQueue } = require('discord-player');

module.exports = {
  name: 'pause',
  description: 'Pauses the current track.',

  run: async (client, voiceChannel) => {
      const guildId = voiceChannel.guild.id;
      const queue = useQueue(guildId);

      if (!queue || !queue.isPlaying()) {
          console.log('No music is currently being played!');
          return;
      }

      if (queue.node.isPaused()) {
          console.log('Music is already paused!');
          return;
      }

      try {
          queue.node.setPaused(true);
          console.log('Music has been paused.');
      } catch (err) {
          console.log('Error pausing the song.');
      }
  },
};
