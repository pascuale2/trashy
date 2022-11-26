const voice = require("@discordjs/voice");

class TrashRefreshing {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/refreshing.m4a'));
    }

    config = {
        name: "refreshing",
        help: "Does this quench your thirst?"
    }
}

module.exports = TrashRefreshing;