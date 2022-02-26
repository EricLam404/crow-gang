const { MessageEmbed, Client, Message } = require("discord.js")

const Schema = require("../Models/GuildConfig")
const embed = new MessageEmbed().setColor("WHITE");

module.exports = async function (msg, args, PREFIX){
  let admin = 689890832228417622;
  if(!msg.roles.cache.has(admin)){
    if(!args.length) {
      const guildConfig = await Schema.findOne({ GuildId: msg.guildId });

      let guildName = msg.guild.name;
      let guildPrefix = guildConfig?.Prefix ?? PREFIX;

      embed.setDescription('Prefix for **'+ guildName + '** is **' + guildPrefix + '** ');

      return await msg.channel.send({embeds: [embed]});
    }

    if(args[0] === "set") {
      const newPrefix = args[1];
      if(!newPrefix){
        embed.setDescription('Must Provide New Prefix to Set! \'!prefix set <new-prefix>\' ');
        return await msg.channel.send({embeds: [embed]});
      }
      if(newPrefix.length > 1){
        embed.setDescription('Prefix length must be less than 1 character!');
        return await msg.channel.send({embeds: [embed]});
      }

      await Schema.findOneAndUpdate({ GuildID: msg.guildId }, { Prefix: newPrefix }, {upsert: true});
      embed.setDescription('Prefix set to : ' + newPrefix);
      return await msg.channel.send({embeds: [embed]});
    }
  }
  else{
    embed.setDescription("Sorry you dont have permissions to change the prefix");
    return await msg.channel.send({embeds: [embed]});
  }
}
