require("dotenv").config();

const { Client, Intents, Collection } = require("discord.js");

const FiveM = require("fivem") // Import the npm package.


const srv = new FiveM.Server('') // Set the IP with port.


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});


client.once('ready', () => {


    console.log("Bot is Online");
    setInterval(() => {
        srv.getPlayers().then((result) => {
            client.user.setActivity(`with ${result} players`,{ type: 'PLAYING' });
        })
        .catch(function () {
            client.user.setActivity("AIVPV4",{ type: 'WATCHING' });
        })
      }, 10000);
});




client.login(process.env.TOKEN);