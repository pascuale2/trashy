const tts = require("../Utility/playTTS");
const voice = require("@discordjs/voice");

class TrashYell {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        if(args && args.length) {
            let text = args.join(" ") + " is";
            if(text.length > 64) {
                message.channel.send("Jacob, no! :trash:");
            }
            player.Play(message, [                
                tts.getVoiceResource(text),
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