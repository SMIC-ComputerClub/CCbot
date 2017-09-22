const commando = require('discord.js-commando')
const youtube = require('ytdl-core');

var queue =[];

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
            message.reply('Please provide a link');
        }
        else if(queue.length==0)
        {
            message.member.voiceChannel.join().then(connection=>
            {
                queue.push(args);
                //if(!message.member.voiceChannel)
                console.log(queue);
                let dispatcher = connection.playStream(youtube(queue[0], {filter: 'audioonly'}));
                
                dispatcher.on('end', () => 
                {
                    if(queue.length==0)
                    {
                        message.member.voiceChannel.leave();   
                    }   
                    else
                    {   
                        queue.shift();
                        dispatcher = connection.playStream(youtube(queue[0], {filter:'audioonly'}));
                    }
                });

                dispatcher.on('error', e => {
                    console.log(e);
                });
            });
        }
        else
        {
            queue.push(args);
            console.log(queue);
        }
    }
}

module.exports = playMusic;