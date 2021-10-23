class TrashSmoke {
    run(client, message, args) {
        message.member.voice.disconnect("Ninjaed.");
        const voice = require('../Utility/playvoice');
        voice.Play(message, 'Assets/smoke.m4a');
    }

    config = {
        name: "trashsmoke",
        help: "For when you're in need of escape."
    }
}

module.exports = TrashSmoke;