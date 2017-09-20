const commando = require('discord.js-commando');

class leaveVoice extends commando.Command{
    constructor(client)
    {
        super(client,
        {
            name:'leave',
            group:'music',
            memberName:'leavevc',
            description:'leave vc'     
        });
    }

    async run(message, args)
    {
        if(!message.member.voiceChannel)
        {
            message.reply('Please join the voice channel the bot is in before using that command');
        }
        else
        {
            message.member.voiceChannel.leave();
        }
    }
}

module.exports = leaveVoice;    