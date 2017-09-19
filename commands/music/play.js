const commando = require('discord.js-commando')
const youtube = require('ytdl-core');

function play(connection,message)
{
    server.dispatcher = connection.playStream(youtube(queue[0], {filter: 'audioonly'}));
    server.queue.shift();
    server.dispatcher.on('end', function(){
        if(queue[0])
            play(connection, message);
        else
        connection.disconnect();
    })
}

class playMusic extends commando.Command{
    constructor(client)
    {
        super(client,
        {
            name:'play',
            group:'music',
            memberName:'play',
            description:'play music with a given youtube link'
        });
    }

    async run(message,args)
    {
        if(!message.member.voiceChannel)
        {
            message.reply('Please join a voice channel before you queue music');
        }
        else if(!args)
        {
            message.reply('Please provide a valid link');
        }
        else{
            message.member.voiceChannel.join().then(function(connection)
        {
            play(connection, message);
        });
        }

    }
}

module.exports = playMusic;