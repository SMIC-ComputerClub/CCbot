const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'Flip a fair coin',
        });
    }

    async run(message, args)
    {
        var roll = Math.floor(Math.random()*2)+1;
        if (roll == 1)
        {
            message.reply("You flipped a head!");
        }
        if (roll == 2)
        {
            message.reply("You flipped a tail!");
        }
    }
}

module.exports = DiceRollCommand;
