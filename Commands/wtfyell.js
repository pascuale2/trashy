class WtfYell {
    run(client, message, args) {
        const voice = require('../Utility/playvoice');
        voice.Play(message, 'Assets/wtf.m4a');
    }

    config = {
        name: "wtf",
        help: "Does anyone really know what they are doing?"
    }
}

module.exports = WtfYell;