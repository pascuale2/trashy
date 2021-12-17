class TrashSick {
    run(client, message, args) {
        const voice = require('../Utility/playvoice');
        voice.Play(message, 'Assets/sick.m4a');
    }

    config = {
        name: "sick",
        help: "If motion base stops working."
    }
}

module.exports = TrashSick;