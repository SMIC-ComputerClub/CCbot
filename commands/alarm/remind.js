const commando = require('discord.js-commando')

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

class remindMe extends commando.Command{
    constructor(client)
    {
        super(client,
        {
            name:'remindme',
            group:'alarm',
            memberName:'alarm',
            description:'send a pm to the user with the given amount of time'
        });
    }

    async run(message, args)
    {
        message.reply(`remind ${args} ms`);
        await sleep(args);
        message.reply('TIME\'S UP!');
    }
}

module.exports = remindMe;