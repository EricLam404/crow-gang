const Discord = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(process.env.BOTTOKEN);

client.on('ready', () => {
  console.log('The client is ready!')
})

client.login(process.env.BOTTOKEN)
