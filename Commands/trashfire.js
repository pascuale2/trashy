class TrashFire {
    constructor() {
        const Discord = require('discord.js');
        const fs = require("fs");
        var trashGifs = [];
        const path = "./Assets/trashFireGifs";
        fs.readdir(path, (err, files) => {
            files.forEach((file) => {
                trashGifs.push({
                    embeds: [ new Discord.MessageEmbed().setTitle("Trash Fire")], 
                    files: [ path + "/" + file ]
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
        name: "trashfire",
        help: "A hand curated list of Trashfires."
    }
}

module.exports = TrashFire;