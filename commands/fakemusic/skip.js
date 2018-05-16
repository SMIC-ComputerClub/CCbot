const commando = require('discord.js-commando')

class SkipMusic extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'skip',
            group: 'music',
            memberName:'skip',
            description:'skips 1 song',
        })
    }
    
    async run(message, arg)
    {
        
    }
}

module.exports = SkipMusic