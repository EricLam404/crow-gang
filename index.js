const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
var cron = require('node-cron');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let token = process.env.BOTTOKEN;

client.login(token);
client.on('ready', readyDiscord);
function readyDiscord(){
  console.log("Online")
}

const commandHandler = require('./deployCommands')
client.on('messageCreate', commandHandler);

require("./dbLogin")();
/*
const mongoLogin = require('./dbLogin')
client.on('ready', mongoLogin);
*/
cron.schedule('0 0 21 * * 3,5,7', () => {
  var channel = client.channels.cache.get("913599272094666752")
  channel.send("<@&913601123326230578>" + " Time for Club League! :D");
  console.log('SENT');
});

cron.schedule('0 0 20 * * 1,4,6', () => {
  var channel = client.channels.cache.get("913599272094666752")
  channel.send("<@&913601123326230578>" + " 1 hour left in club league!");
  console.log('SENT');
});
