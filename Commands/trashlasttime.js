class TrashLastTime {
    run(client, message, args) {
        message.member.voice.disconnect("Justined.");
        const voice = require('../Utility/playvoice');
        voice.Play(message, 'Assets/lasttime.m4a');
    }

    config = {
        name: "bye",
        help: "When somebody you love goes away."
    }
}

module.exports = TrashLastTime;