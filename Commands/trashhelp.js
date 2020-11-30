class TrashHelp {
    run(client, message, args) {
        var commandsString = "How you can interact with Trashy:\n";
        client.commands.each(element => {
            commandsString += `!${element.config.name} - ${element.config.help}\n`;
        });
        message.author.send(commandsString).catch(err => console.log(err));
    }

    config = {
        name: "trashhelp",
        help: "If you need help with anything Trashy related."
    }
}

module.exports = TrashHelp;