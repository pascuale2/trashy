const voice = require("@discordjs/voice");

class WtfYell {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/wtf.m4a'));
    }

    config = {
        name: "wtf",
        help: "Does anyone really know what they are doing?"
    }
}

module.exports = WtfYell;