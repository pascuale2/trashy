const voice = require("@discordjs/voice");

class DoIt {
	run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/justdoit.m4a'));
    }

    config = {
        name: "doit",
        help: "Just do it."
    }
}

module.exports = DoIt;