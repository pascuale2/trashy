const tts = require("google-tts-api");
const voice = require("@discordjs/voice");

function getVoiceResource(text) {
    return voice.createAudioResource(tts.getAudioUrl(text));
}

function Play(channel, text) {
    if (channel) {
        const connection = voice.joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator
        });
        const player = voice.createAudioPlayer();
        connection.subscribe(player);
        player.play(getVoiceResource(text));
        player.on('idle', () => {
            connection.destroy();
        });
    }
}

module.exports.Play = Play;
module.exports.getVoiceResource = getVoiceResource;