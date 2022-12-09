const voice = require("@discordjs/voice");

class TrashWhat {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/what.m4a'));
    }

    config = {
        name: "what",
        help: "It's not fault, I swear"
    }
}

module.exports = TrashWhat;