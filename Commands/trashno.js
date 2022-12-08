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

class PleaseNo {
    run(client, message, args) {
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/pleaseno.m4a'));
    }

    config = {
        name: "pleaseno",
        help: "When you want to make it stop."
    }
}

module.exports = Nooo;
module.exports = OhNo;
module.exports = PleaseNo;