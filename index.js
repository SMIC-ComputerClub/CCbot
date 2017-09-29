const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '115678953468854279'
});
var asd = require('./auth.json');
//var json = JSON.parse(asd.token);
console.log('token', asd.token)

bot.registry.registerGroup('random');
bot.registry.registerGroup('search');
bot.registry.registerGroup('roles');
bot.registry.registerGroup('music');
bot.registry.registerGroup('alarm');
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();

bot.on('message', (message)=>
{
    if(message.content =='ping')
    {
        message.channel.send('pong');
    }
});

bot.on('guildMemberAdd', function(member){
    const channel = member.guild.channels.find('name', 'general');
    channel.send(`Welcome ${member}`)
    member.addRole(member.guild.roles.find("name", "unconfirmed"));
});

bot.login(asd.token);