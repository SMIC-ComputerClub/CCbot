const commando = require('discord.js-commando')

class PlayMusic extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'play',
            group: 'music',
            memberName:'play',
            description:'Gets a YouTube video and plays its audio',
        })
    }
    
    async run(message, arg)
    {
        
    }
}

module.exports = PlayMusic