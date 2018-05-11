const commando = require('discord.js-commando')

class LeaveVC extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Makes the bot leave the Voice Channel'
        })
    }

    async run(message,arg)
    {

    }
}

module.exports = LeaveVC