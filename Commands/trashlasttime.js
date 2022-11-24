const voice = require("@discordjs/voice");

class TrashLastTime {
    run(client, message, args) {
        message.member.voice.disconnect("Justined.");
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/lasttime.m4a'));
    }

    config = {
        name: "bye",
        help: "When somebody you love goes away."
    }
}

module.exports = TrashLastTime;