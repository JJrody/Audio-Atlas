# Audio Atlas

Audio Atlas is a discord music bot that takes in voice commands through the use of Discord-player and Discord-Speech-recognition . 

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
## Features

- Voice Commands
- slash commands
- Simple music commands such as:
	- play
	- pause
	- stop
	- skip
- Silly random kick command
## Getting Started
### Prerequisites

[Node.Js](https://nodejs.org/en/) (v20.10.0)
[FFMPEG](https://ffmpeg.org/download.html) to process audio [install tutorial](https://www.youtube.com/watch?v=EyIIvctDhYc)

These are the necessary libraries necessary for Audio Atlas
#### Discord.js v14

```
npm install discord.js
```

#### Discord-speech-recognition
```
npm i discord-speech-recognition
```

#### Discord-player
```
npm i --save discord-player
```

#### Discord.js opus  (adds more functionality to Discord-player )
```
npm install --save @discordjs/opus
```

#### Streaming Library ( does not include youtube)
```
npm install --save youtube-ext
```

### Installation 
Clone the repo 

Instal NPM packages 



### Usage

Create a .env file and include BOT token and CLIENT_ID
```
TOKEN= put here
CLIENT_ID = put here
```

Once these Token and client_ID are filled bot should be ready to go!


To initiate voice commands
- Join a voice channel
- run the slash command /join
- once bot joins it waits for a wake word then followed by command
> #### Atlas Play come together

If all goes well atlas should play
