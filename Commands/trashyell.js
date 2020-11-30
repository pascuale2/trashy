class TrashYell {
    run(client, message, args) {
        const voice = require('../Utility/playvoice');
        voice.Play(message, 'Assets/trash.m4a');
    }

    config = {
        name: "trash",
        help: "For when you need a helping hand in a cruel world."
    }
}

module.exports = TrashYell;