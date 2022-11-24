class TrashFire {
    constructor() {
        const Discord = require('discord.js');
        const fs = require("fs");
        var trashGifs = [];
        const path = "./Assets/trashFGifs";
        fs.readdir(path, (err, files) => {
            files.forEach((file) => {
                trashGifs.push({
                    embeds: [ new Discord.EmbedBuilder().setTitle("Paying respects") ], 
                    files: [ new Discord.AttachmentBuilder(path + "/" + file) ]
                });
            });
        });

        this.trashGifs = trashGifs;
    }

    run(client, message, args) {
        var index = Math.floor(Math.random() * this.trashGifs.length);
        if(args.length == 1)
        {
            var i = args[0];

            if(i >= 0 && i < this.trashGifs.length)
            {
                index = i;
            }
        }
        message.channel.send(this.trashGifs[index]).catch(err => console.log(err));
    }

    config = {
        name: "F",
        overridePrefix: true,
        help: "Press F to Pay Respects."
    }
}

module.exports = TrashFire;