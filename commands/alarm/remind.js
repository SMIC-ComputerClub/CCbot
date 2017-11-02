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
        var hpos = args.indexOf('h')
        var mpos = args.indexOf('m')
        var spos = args.indexOf('s')

        var final = args.substring(spos+1)
        console.log(final)

        var hours = parseInt(args.substring(hpos-2,hpos))*3600000
        var mins = parseInt(args.substring(mpos-2,mpos))*60000
        var secs = parseInt(args.substring(spos-2,spos))*1000
        var total=0

        if(hpos==null)
        {
            hours=0
        }
        else total+=hours

        if(mpos==null)
        {
            mins=0
        }
        else total+=mins

        if(spos==null)
        {
            secs=0
        }
        else total+=secs

        console.log(total);

        message.reply(`Noted!`)
        await sleep(total)
        message.reply(`TIME\'S UP! Here is the message you left for yourself:${final}`)
    }
}

module.exports = remindMe;