const Discord = require('discord.js');
const bot = new Discord.Client();
var asd = require('./auth.json');
//var json = JSON.parse(asd.token);
console.log('token', asd.token)

bot.login(asd.token);