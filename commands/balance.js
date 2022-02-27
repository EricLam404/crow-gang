const { MessageEmbed, Client, Message } = require("discord.js")

const MemberData = require("../Models/GuildMember");
const embed = new MessageEmbed().setColor("WHITE");

module.exports = async function (msg, args){
  let guildId = msg.guildId;
  let memberId = msg.memberId;
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
    embed.setDescription("You have **0** Crow Coins in your wallet");
    return await msg.channel.send({embeds: [embed]});
  }
  embed.setDescription("You have **" + member.money + "** Crow Coins in your wallet");
  return await msg.channel.send({embeds: [embed]});
}
