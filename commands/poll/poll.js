const commando = require('discord.js-commando')

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

class StartPoll extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'poll',
            group: 'poll',
            memberName:'poll',
            description:'starts a poll that counts reactions',
        })
    }
    
    async run(message, arg)
    {
        const pollMsg = await message.channel.send(arg.toString())
        pollMsg.react('🍰')
        await sleep(30000)
        console.log(pollMsg.reactions)
        // pollTopic.react(`:two:`)
        // pollTopic.react(`:three:`)
        // pollTopic.react(`:four:`)
    }
}

module.exports = StartPoll