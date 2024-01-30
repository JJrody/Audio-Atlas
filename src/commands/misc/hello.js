module.exports = {
    name: 'hello',
    description: 'says hi back',
    
    run: async (client, interaction) => {
        // Check if interaction has a 'reply' method
        if (interaction && typeof interaction.reply === 'function') {
            // Interaction is from a text command
            interaction.reply(`Hi! ${client.ws.ping}ms`);
        } else {
            // Interaction is from a voice command
            interaction.channel.send(`Hi! ${client.ws.ping}ms`);
        }
    }
};