const voice = require("@discordjs/voice");

class HelpMe {
	run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/helpme.m4a'));
    }

    config = {
        name: "helpme",
        help: "I need help."
    }
}

module.exports = HelpMe;