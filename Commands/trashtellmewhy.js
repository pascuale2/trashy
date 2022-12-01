const voice = require("@discordjs/voice");

class TrashTellMeWhy{
    lastIndex = 0;
    soundPaths = [
        "Assets/heartache.m4a",
        "Assets/mistake.m4a",
        "Assets/hearyousay.m4a",
    ];

    run(client, message, args) {
        const player = require('../Utility/playvoice');
        do {
            const randomIndex = Math.floor(Math.random() * this.soundPaths.length);
            if (randomIndex != this.lastIndex) {
                this.lastIndex = randomIndex;
                break;
            }
        } while (this.soundPaths.length > 1);
        player.Play(message, voice.createAudioResource(this.soundPaths[this.lastIndex]));
    }

    config = {
        name: "tellmewhy",
        help: "Do you really want it that way?"
    }
}

module.exports = TrashTellMeWhy;