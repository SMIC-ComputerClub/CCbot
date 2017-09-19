const commando = require('discord.js-commando');

class createRole extends commando.Command{
    constructor(client)
    {
        super(client,
        {
            name: 'createrole',
            group:'roles',
            memberName:'creterole',
            description:'create a role with a given name'
        });
    }
    async run(message, args)
    {
        message.guild.createRole({
            name: `${args}`,
            // color: generateHex(),
            // permissions: ['Administrator', 'ManageRoles']
        }).then(message.reply('created role '+ args))
    }
}

module.exports = createRole;