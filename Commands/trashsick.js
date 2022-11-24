const voice = require("@discordjs/voice");

class TrashSick {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/sick.m4a'));
    }

    config = {
        name: "sick",
        help: "If motion base stops working."
    }
}

module.exports = TrashSick;