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
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();

bot.on('message', (message)=>
{
    if(message.content =='ping')
    {
        message.channel.sendEmbed('pong');
    }
});

bot.on('guildMemberAdd', function(member){
    let guild = member.guild;
    guild.defaultChannel.send('Welcome' + member.toString+ 'to the SMIC Computer Club');
    member.addRole
})

bot.login(asd.token);