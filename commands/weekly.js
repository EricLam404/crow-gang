const { MessageEmbed, Client, Message } = require("discord.js")

const MemberData = require("../Models/GuildMember");
const embed = new MessageEmbed().setColor("WHITE");

module.exports = async function (msg, args){
  let money = Math.floor(Math.random() * 10000) + 1;
  let guildId = msg.guildId;
  let memberId = msg.author.id;

  let member = await MemberData.findOne({
    memberID: memberId,
    guildID: guildId
  });
  if(!member) {
    let newUser = new MemberData({
      memberID: memberId,
      guildID: guildId,
      money: money,
      lastWeekly: Date.now()
    });
    await newUser.save().catch(e => console.log(`An error occured when saving the user data: \n${e.message}`));
    embed.setTitle("Here is your daily coins, " + msg.author.username);
    embed.setDescription("**" + money + "** Crow Coins have been placed in your wallet");
    return await msg.channel.send({embeds: [embed]});
  }

  let timeLeft = Date.now() - member.lastWeekly;
  if(timeLeft > 604800000){
    member.money += money;
    member.lastWeekly = Date.now();
    await member.save().catch(e => console.log(`An error occured while saving the data: \n${e.message}`));

    embed.setTitle("Here is your daily coins, " + msg.author.username);
    embed.setDescription("**" + money + "** Crow Coins have been placed in your wallet");
    return await msg.channel.send({embeds: [embed]});

  }
  else{
    timeLeft = ((604800000) - timeLeft)/1000;
    let days = Math.floor(timeLeft/86400);
    timeLeft -= days * 86400;
    let hours = Math.floor(timeLeft/3600);
    timeLeft -= hours * 3600;
    let minutes = Math.floor(timeLeft/60);
    timeLeft -= minutes * 60;
    let seconds = Math.floor(timeLeft);
    embed.setDescription("Please wait **" + days + " Days "+ hours + " Hours " + minutes + " Minutes " + seconds + " Seconds** before using this command");
    return await msg.channel.send({embeds: [embed]});
  }
}
