require("dotenv").config();
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login("OTE3NTUxMDMzOTczMDgwMTM0.Ya6V_Q.zPmFfMZDe4y5RPWiDbAe-vS6VDQ");

client.on('ready', () => {
  console.log('The client is ready!');
})
