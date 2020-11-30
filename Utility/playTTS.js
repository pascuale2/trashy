const Stream = require("stream");
const https = require("https");
const tts = require("google-tts-api");


function getVoiceStream(text) {
    const stream = new Stream.PassThrough();
    tts(text, "en-US", 1).then(url => {
        const request = https.get(url, (response, err) => {
            response.pipe(stream);
        });
    });

    return stream;
}

function Play(channel, text) {
    channel.join().then(connection => {
        const dispatcher = connection.play(getVoiceStream(text));
        dispatcher.on("finish", () => {
            channel.leave();
        });
    }).catch(err => console.log(err));
}

module.exports.Play = Play;