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
            let index = -1;
            let player;
            let playNextOrDie = () => {
                if(Array.isArray(audioFile)) {
                    if((index+1) < audioFile.length) {
                        index++;
                        player = voice.createAudioPlayer();
                        connection.subscribe(player);
                        player.play(audioFile[index]);
                    } else {
                        connection.destroy();
                        return;
                    }
                } else {
                    if(index == -1) {
                        index++;
                        player = voice.createAudioPlayer();
                        connection.subscribe(player);
                        player.play(audioFile);
                    } else {
                        connection.destroy();
                        return;
                    }
                }
                player.on('idle', () => {
                    playNextOrDie();
                });
            };
            playNextOrDie();
        }
    }
}

module.exports.Play = Play;