const tts = require("../Utility/playTTS");

class GoodMorning {
	run(client, message, args) {
		const player = require('../Utility/playvoice');
		player.Play(args.channelID, tts.getVoiceResource(args.member.displayName));
	}

	config = {
        name: "goodmorning",
    }
}

module.exports = GoodMorning;