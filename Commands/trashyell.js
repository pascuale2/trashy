const tts = require("../Utility/playTTS");
const voice = require("@discordjs/voice");

class TrashYell {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        if(args && args.length) {
            player.Play(message, [
                tts.getVoiceResource(args.join(" ") + " is"),
                voice.createAudioResource('Assets/trash.m4a'),
            ]);
        } else {
            player.Play(message, voice.createAudioResource('Assets/trash.m4a'));
        }
    }

    config = {
        name: "trash",
        help: "For when you need a helping hand in a cruel world."
    }
}

module.exports = TrashYell;