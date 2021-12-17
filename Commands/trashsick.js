class TrashSick {
    run(client, message, args) {
        const voice = require('../Utility/playvoice');
        voice.Play(message, 'Assets/sick.m4a');
    }

    config = {
        name: "sick",
        help: "People are getting sick."
    }
}

module.exports = TrashSick;