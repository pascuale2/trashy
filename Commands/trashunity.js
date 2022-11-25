const tts = require("../Utility/playTTS");
const voice = require("@discordjs/voice");

class TrashUnity {
    index = 0
    roasts = [
        "When I look at Unity, I wish I could meet it again for the first time... and walk past.",
        "Unity is the sun in my life... now get 93 million miles away from me.",
        "There is someone out there for everyone. For unity, it's garburator.",
        "I can't wait to spend my whole life without unity.",
        "I didn't mean to offend Unity... but it was a huge plus.",
        "I don't hate Unity, but if it were drowning, I would give it a high five.",
        "If I throw a stick, will Unity leave me too?",
        "I don't know what makes Unity so bad, but it works.",
        "If I had a dollar every time Unity breaks, I'd be rich.",
        "Every time I have a stick in my hand, Unity looks like a pinata.",
        "When I look at Unity, I think to myself where have you been my whole life? Can you go back there?",
        "I think Unity just need a high five... in the face... with a chair.",
        "When I work with Unity, I think it's really going to go far. I hope it stays there.",
        "When I'm about to work in Unity, I get pre annoyed. I'm just giving myself a head start.",
        "Unity is the reason why God is not talking to us anymore.",
        "Everyone is allowed to act stupid once, but Unity... Unity is abusing that privilege.",
        "Unity didn't change since last time I used it. It should.",
    ]

    constructor() {
       this.shuffle();
    }

    shuffle() {
        for(let i = this.roasts.length - 1; i > 0 ; i--) {
            let t = this.roasts[i];
            let j = Math.floor(Math.random() * (i + 1));
            this.roasts[i] = this.roasts[j];
            this.roasts[j] = t;
        }
    }

    run(client, message, args) {
        const player = require('../Utility/playvoice');
        this.lastRoast = this.roasts[this.index++];
        if(this.index >= this.roasts.length) {
            this.shuffle();
        }
        player.Play(message, [
            tts.getVoiceResource(this.lastRoast),
            voice.createAudioResource('Assets/ohhh.m4a'),
        ]);
    }

    config = {
        name: "trashunity",
        help: "Yo Unity"
    }
}

module.exports = TrashUnity;