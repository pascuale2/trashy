const voice = require("@discordjs/voice");

class PleaseNo {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/pleaseno.m4a'));
    }

    config = {
        name: "pleaseno",
        help: "When you want to make it stop."
    }
}

module.exports = PleaseNo;