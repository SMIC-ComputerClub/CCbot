const commando = require('discord.js-commando');
const music = require('discord.js-music-v11');
const bot = new commando.Client({
    owner: '115678953468854279'
});
var asd = require('./auth.json');
//var json = JSON.parse(asd.token);
console.log('token', asd.token)

bot.registry.registerGroup('random')
bot.registry.registerGroup('search')
bot.registry.registerGroup('roles')
bot.registry.registerGroup('alarm')
bot.registry.registerGroup('music')
bot.registry.registerGroup('poll')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();

bot.on('message', (message)=>
{
    if(message.content =='ping')
    {
        message.channel.send('pong');
    }
    else if(message.content.toLowerCase().includes('penis'))
    {
        message.channel.send(':b:enis');
    }
});

bot.on('message', (message)=>
{
    var roll = Math.floor(Math.random()*3)+1
    if((message.content.length>20)&&(message.content.length<30)&&(roll==1))
    {
        console.log(message.content.length)
        message.channel.send('I am Henry Lin, plz fuck my attention-whore-ass!');
    }
});

bot.on('guildMemberAdd', function(member){
    const channel = member.guild.channels.find('name', 'smicancer');
    channel.send(`Welcome ${member}`)
    member.addRole(member.guild.roles.find("name", "unconfirmed"));
});

music(bot, {
	prefix: '!',        // Prefixs
	global: false,      // Server-specific queues.
	maxQueueSize: 10,   // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)

});

bot.login(asd.token);