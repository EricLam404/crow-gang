const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const Discord = require('discord.js');
const Schema = require("./Models/GuildConfig");

const club = require('./commands/club.js');
const prefix = require('./commands/prefix.js');

const commands = { club, prefix };

module.exports = async function (msg){
  const guildConfig = await Schema.findOne({ GuildId: msg.guildId });
  let prefix = "!";

  if(guildConfig && guildConfig?.Prefix){
    prefix = guildConfig?.Prefix;
  }

  let tokens = msg.content.split(" ");
  let command = tokens.shift();

  if (command.charAt(0) === prefix) {
    command = command.substring(1);
    if(command === "prefix"){
      commands[command](msg, tokens, prefix);
    }
    else{
      commands[command](msg, tokens);
    }
  }

/*
  else if(msg.content == '!updateClubTrophies'){
    let url = 'https://api.brawlstars.com/v1/clubs/%23CPVULCUY';
    const getJSON = async url => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJiNmM1NGFmLTBkY2MtNDg1OC1hN2FlLWM0Y2QwZTZiZDJjYiIsImlhdCI6MTYzOTAwNjQwNiwic3ViIjoiZGV2ZWxvcGVyL2E5NWU4ZWZjLWU0YzAtMDJkMS1kMjZkLTYzMzQ2NjZkMWNjNyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTA4LjYuNjQuMjIzIl0sInR5cGUiOiJjbGllbnQifV19.K2BjMQ3Rvfr8-DUZdQruJSdnk0noCBdwwn2oiA6Lzb2iuEqUSjGfte9EbROXGDb9PTwZJYJGjSptb02q5Ivpmg>',
            },
        });
        if(!response.ok) {throw new Error(response.statusText);}
        const data = await response.json();
        return data;
    }
    catch(error) {
        return error;
    }
    };

    getJSON(url).then(data => {
        console.log(data);
        let club = data;
        let str = "";
        for(let i = 0; i < club.members.length; i++){
          let name = "" + club.members[i].name;
          let trophies = "" + club.members[i].trophies;
          str += (i+1) + "." + name + ": " + trophies + "\n";
        }
        const embed = new Discord.MessageEmbed()
            .setTitle('Crow Gang')
            .setDescription(str)
        msg.channel.send({embeds: [embed]});
    }).catch(error => {
        console.error(error);
    });
  }
  else if(msg.content == '!help'){
    msg.reply("!club-club trophies \n!updateClubTrophies-accurate club trophes that works once every like 5mins");
  }
  */
};
