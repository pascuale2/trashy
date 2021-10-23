const voice = require("@discordjs/voice");

function Play(message, audioFile) {
    if (!message.member.voice.channel) {
        message.channel.send("No trash :sob:");
    }
    else {
        const voiceChannel = message.member.voice.channel;

        if (voiceChannel) {
            const connection = voice.joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator
            });
            const player = voice.createAudioPlayer();
            connection.subscribe(player);
            player.play(voice.createAudioResource(audioFile));
            player.on('idle', () => {
                connection.destroy();
            });
        }
    }
}

module.exports.Play = Play;