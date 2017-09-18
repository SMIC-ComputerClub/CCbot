const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '115678953468854279'
});
var asd = require('./auth.json');
//var json = JSON.parse(asd.token);
console.log('token', asd.token)

bot.registry.registerGroup('random');
bot.registry.registerGroup('search');
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();

bot.on('message', (message)=>
{
    if(message.content =='ping')
    {
        message.channel.sendEmbed('pong');
    }
});

bot.login(asd.token);