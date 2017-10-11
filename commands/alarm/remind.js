const commando = require('discord.js-commando')

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
        //TODO
    }
}

module.exports = remindMe;