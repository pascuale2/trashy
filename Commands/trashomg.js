const voice = require("@discordjs/voice");

class OhMyGod {
	run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/omg.m4a'));
    }

    config = {
        name: "omg",
        help: "Oh my god."
    }
}

module.exports = OhMyGod;