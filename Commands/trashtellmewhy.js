const voice = require("@discordjs/voice");

class TrashTellMeWhy{
    soundPaths = [
        "Assets/heartache.m4a",
        "Assets/mistake.m4a",
        "Assets/hearyousay.m4a",
    ];

    run(client, message, args) {
        const player = require('../Utility/playvoice');
        const randomIndex = Math.floor(Math.random() * this.soundPaths.length);
        player.Play(message, voice.createAudioResource(this.soundPaths[randomIndex]));
    }

    config = {
        name: "tellmewhy",
        help: "Do you really want it that way?"
    }
}

module.exports = TrashTellMeWhy;