const path = require('path');
const getAllFiles = require('./getAllFiles');

module.exports = (exceptions = []) => {
    let localCommands = [];
    
    const commadndCategories = getAllFiles(
        path.join(__dirname,'..','commands'),
        true
    )
    
    for (const commadndCategory of commadndCategories){
        const commandFiles = getAllFiles(commadndCategory);

        for(const commandFile of commandFiles){
            const commandObject = require(commandFile);
            

            if(exceptions.includes(commandObject.name)){
                continue;
            }
            //console.log(commandObject);
            localCommands.push(commandObject);
        }
    }

    return localCommands;
}