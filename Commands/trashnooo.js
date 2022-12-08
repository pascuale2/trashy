const voice = require("@discordjs/voice");

class Nooo {
	run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/nooo.m4a'));
    }

    config = {
        name: "nooo",
        help: "When the despair has consumed you."
    }
}

module.exports = Nooo;