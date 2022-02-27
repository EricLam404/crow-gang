const { MessageEmbed, Client, Message } = require("discord.js")

const Schema = require("../Models/balance")
const embed = new MessageEmbed().setColor("GRAY");

module.exports = async function (msg, args, PREFIX){
  const memberConfig = await Schema.findOne({ GuildId: msg.guildId, MemberID: msg.member.id });

  let bal = memberConfig.Amount;
  let lastDaily = memberConfig.LastDaily;

  let timeLeft = Date.now() - lastDaily;
  if(timeLeft > 86400000){
    let dailyCoins = random.int(20000,30000);
    bal += dailyCoins;
    lastDaily = Date.now();

    await Schema.findOneAndUpdate({ GuildID: msg.guildId }, { Prefix: newPrefix }, {upsert: true});

    embed.setTitle("Here is your daily coins, " + msg.author.username);
    embed.setDescription(dailyCoins + " Crow Coins have been placed in your wallet");
    return await msg.channel.send({embeds: [embed]});

  }
  else{
    let hours = Math.floor(timeLeft/3600);
    timeLeft -= hours * 3600;
    let minutes = Math.floor(timeLeft/60);
    timeLeft -= minutes * 60;
    let seconds = timeLeft;
    embed.setDescription("Please wait **" + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds** before using this command");
    return await msg.channel.send({embeds: [embed]});
  }
}
