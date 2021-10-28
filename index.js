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
    if (message.author.bot || message.content[0] != prefix) { return; }

    const [cmd, ...args] = message.content.trim().slice(prefix.length).split(/\s+/g);

    if (cmd == "testWelcome") {
        message.author.send(constants.welcomeMessage).catch(err => console.log(err));
    }

    const command = client.commands.get(cmd);
    if (command) {
        command.run(client, message, args);
    }
});

// client.on("voiceStateUpdate", (oldState, newState) => {
//     if (!oldState.member.user.bot && oldState.channel != newState.channel) {
//         if (newState.channel && newState.channel.id == constants.demoVoiceChannelId) {
//             var name = newState.member.user.username;
//             if (newState.member.nickname) name = newState.member.nickname;
//             tts.Play(newState.channel, `${name} has joined the demo.`);
//         }
//     }
// });

client.on("guildMemberAdd", member => {
    console.log("New member!");
    member.user.send(constants.welcomeMessage).catch(err => console.log(err));
});

client.login(token);