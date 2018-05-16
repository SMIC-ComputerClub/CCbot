const commando = require('discord.js-commando')

class ShowQueue extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'queue',
            group: 'music',
            memberName:'queue',
            description:'shows the entire music queue',
        })
    }
    
    async run(message, arg)
    {
        
    }
}

module.exports = ShowQueue