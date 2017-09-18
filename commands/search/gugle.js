const commando = require('discord.js-commando');
var request = require("request");
var AuthDetails = require("../../auth.json");

class ImageSearch extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'image',
            group: 'search',
            memberName: 'topsearch',
            description: 'fetch the top google image search',
        });
    }

    async run(message, args)
    {
        if(!AuthDetails || !AuthDetails.google_custom_search)
        {
			message.channel.sendMessage("Image search requires a Google Custom Search key.");
			return;
		}
        request("https://www.googleapis.com/customsearch/v1?key=+AIzaSyBiw58K8MJOzZYIbDNTcJN0aSw8K1MOtSI&cx=005095525797302733243:qcilnmzij7q&num=1&searchType=image&q=" + args,
            function (err, res, body)
            {
                var data, error;
                try
                {
				    data = JSON.parse(body);
                }
                catch (error)
                {
				    console.log(error)
				    return;
			    }
                if (!data)
                {
				    console.log(data);
				    message.channel.sendMessage( "Error:\n" + JSON.stringify(data));
				    return;
			    }
                else if (!data.items || data.items.length == 0)
                {
				    console.log(data);
				    message.channel.sendMessage( "No result for '" + args + "'");
				    return;
			    }
			var result = data.items[0];
			message.channel.sendMessage( result.title + '\n' + result.link);
		});
	}
}

module.exports = ImageSearch;
