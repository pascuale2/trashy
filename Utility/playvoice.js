function Play(message, audioFile) {
    if (!message.member.voice.channel) {
        message.channel.send("No trash :sob:");
    }
    else {
        const voiceChannel = message.member.voice.channel;

        if (voiceChannel) {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(audioFile);
                dispatcher.on("finish", () => {
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));
        }
    }
}

module.exports.Play = Play;