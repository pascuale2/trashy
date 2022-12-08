const voice = require("@discordjs/voice");

class OhNo {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/ohno.m4a'));
    }

    config = {
        name: "ohno",
        help: "When you were not prepared."
    }
}

module.exports = OhNo;