const { MessageEmbed, Client, Message } = require("discord.js")

const MemberData = require("../Models/GuildMember");
const embed = new MessageEmbed().setColor("WHITE");

module.exports = async function (msg, args){
  let tokens = msg.content.split(" ");

  let guildId = msg.guildId;
  let memberId = msg.mentions.members.first()?.user.id ?? msg.author.id;

  let member = await MemberData.findOne({
    memberID: memberId,
    guildID: guildId
  });

  if(!member) {
    let newUser = new MemberData({
      memberID: memberId,
      guildID: guildId,
    })
  }
  if(member.money === null){
    embed.setTitle("Wallet");
    embed.setDescription(msg.author.username + ": \n**0** Crow Coins");
    return await msg.channel.send({embeds: [embed]});
  }
  if (msg.mentions.members.first()){
    embed.setTitle("Wallet");
    embed.setDescription(msg.mentions.members.first().user.username + ": \n**" + member.money + "** Crow Coins");
    return await msg.channel.send({embeds: [embed]});
  }
  embed.setTitle("Wallet");
  embed.setDescription(msg.author.username + ": \n**" + member.money + "** Crow Coins");
  return await msg.channel.send({embeds: [embed]});
}
