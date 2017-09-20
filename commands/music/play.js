const commando = require('discord.js-commando')
const youtube = require('ytdl-core');

// var servers = {};

// function play(connection,message)
// {
//     var server = servers[message.guild.id];
//     server.dispatcher = connection.playStream(youtube(server.queue[0], {filter: 'audioonly'}));
//     server.queue.shift();
//     server.dispatcher.on('end', function(){
//         if(server.queue[0])
//             play(connection, message);
//         else
//             connection.disconnect();
//     })
// }

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
        var queue = [];
        if(!message.member.voiceChannel)
        {
            message.reply('Please join a voice channel before you queue music');
        }
        else if(!args)
        {
            message.reply('Please provide a link');
        }
        else{
            message.member.voiceChannel.join().then(connection=>
            {
                //message.reply('Added')
                //if(!queue[0])
                //{
                    queue.push(`${args}`);
                    let dispatcher = connection.playStream(youtube(queue[0], {filter: 'audioonly'}));
                //}
                // else
                // {
                //     queue.push(`${args}`);
                // }
                // dispatcher.on('end', () => 
                // {

                //     dispatcher = connection.playStream(youtube(queue[0], {filter:'audioonly'}));
                // });
                  
                dispatcher.on('error', e => 
                {
                    console.log(e);
                });
                  
            });
        }
    }
}

module.exports = playMusic;