const Discord = require('discord.js');
const requireAll = require("require-all");

const { prefix } = require("./config.json");
const tts = require("./Utility/playTTS");
const constants = require("./Utility/constants");

const token = process.env.DISCORD_TOKEN;

const client = new Discord.Client({
    intents: [ Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.DIRECT_MESSAGES ]
});
client.commands = new Discord.Collection();

const commandFiles = requireAll({
    dirname: `${__dirname}/Commands`,
    filter: /^(?!-)(.+)\.js$/
});

for (const fileName in commandFiles) {
    const command = new commandFiles[fileName]();
    client.commands.set(command.config.name, command);
}

client.on("ready", () => {
    console.log("Ready");
});

client.on("messageCreate", message => {
    if (message.author.bot ||
        (message.content[0] != prefix &&
        message.content.length != 1)) { return; }

    if (message.content.length == 1) {
        let command = client.commands.get(message.content);
        if (command && command.config.overridePrefix) {
            console.log('Running command: `' + message.content + '`');
            command.run(client, message, [message.content]);
        } else {
            return;
        }
    }
        
    const [cmd, ...args] = message.content.trim().slice(prefix.length).split(/\s+/g);

    command = client.commands.get(cmd);
    if (command) {
        console.log('Running command: `' + cmd + '`');
        command.run(client, message, args);
    }
});

client.on("guildMemberAdd", member => {
});

client.login(token);