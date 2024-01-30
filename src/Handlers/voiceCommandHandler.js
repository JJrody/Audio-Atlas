const speech = require('discord-speech-recognition');
const fs = require('fs');
const path = require('path');

module.exports = async (client, voiceCommand, voiceChannel) => {
    console.log(`Voice Command Received: ${voiceCommand}`);

    // Split the command and its arguments
    const args = voiceCommand.split(' ');
    args.shift();
    const commandName = args[0].toLowerCase();
    console.log(commandName);

    const commandSubDirs = ['misc', 'music'];

    let commandFound = false;
    for (const dir of commandSubDirs) {
        const commandPath = path.join(__dirname, '..', 'commands', dir, `${commandName}.js`);
        // Check if the command file exists
        if (fs.existsSync(commandPath)) {
            try {
                const command = require(commandPath);

                if (commandName === "play" || commandName === "pause" || commandName=== "resume") {
                
                    console.log(args);
                    if (commandName === "play") {
                        args.shift(); 
                    }
                    await command.run(client, voiceChannel, ...args); // Pass the real interaction (voiceChannel in this case)
                    commandFound = true;
                    break;
                } else {
                    // Creating a pseudo interaction object for other voice commands
                    const pseudoInteraction = {
                        channel: voiceChannel,
                        reply: (message) => {
                            voiceChannel.send(message);
                        },
                    };
                    
                    console.log(args);
                    await command.run(client, pseudoInteraction, ...args);
                    commandFound = true;
                    break;
                }
            } catch (error) {
                console.error(`Error executing voice command: ${commandName}\n${error}`);
                return;
            }
        }
    }

    if (!commandFound) {
        console.log(`Command not found: ${commandName}`);
    }
};
