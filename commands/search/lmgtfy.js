const commando = require('discord.js-commando');

class lmgtfy extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'lmgtfy',
                group: 'search',
                memberName: 'lmgtfy',
                description: 'that moment when u\'re too lazy to google something you need',

            });
    }

    async run(message, args)
    {
        var replaced = args.split(' ').join('%20');
        message.channel.sendMessage("http://lmgtfy.com/?q=" + replaced);
    }
}

module.exports = lmgtfy;
