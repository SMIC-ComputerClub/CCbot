const commando = require('discord.js-commando');

function generateHex()
{
    return(Math.floor(Math.random()*16777215).toString(16))
}

class createRole extends commando.Command{
    constructor(client)
    {
        super(client,
        {
            name: 'createrole',
            group:'roles',
            memberName:'createrole',
            description:'create a role with a given name'
        });
    }
    async run(message, args)
    {
        message.guild.createRole({
            name: `${args}`,
            color: generateHex(),
            // permissions: ['Administrator', 'ManageRoles']
        }).then(message.reply('created role '+ args))
    }
}

module.exports = createRole;