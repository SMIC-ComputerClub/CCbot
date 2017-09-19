const commando = require('discord.js-commando')

class selfAssign extends commando.Command{
    constructor(client)
    {
        super(client,
        {
            name:'selfassign',
            group:'roles',
            memberName:'selfassign',
            description:'self assign a role'
        });
    }
    
    async run(message, args)
    {
        message.member.addRole(message.member.guild.roles.find("name","lmao"));
    }
}

module.exports = selfAssign;