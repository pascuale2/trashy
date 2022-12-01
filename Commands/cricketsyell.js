const voice = require("@discordjs/voice");

class CricketsYell {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/crickets.m4a'));
    }

    config = {
        name: "crickets",
        help: "Crickets are orthopteran insects which are related to bush crickets, and, more distantly, to grasshoppers."
    }
}

module.exports = CricketsYell;