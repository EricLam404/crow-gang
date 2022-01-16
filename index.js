
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(OTE3NTUxMDMzOTczMDgwMTM0.Ya6V_Q.zPmFfMZDe4y5RPWiDbAe-vS6VDQ);

client.on('ready', readyDiscord);

function readyDiscord(){
  console.log("Online")
}

client.on('messageCreate', gotMessage);

async function gotMessage(msg){
  if(msg.content === '!club'){
    let club = {
  tag: '#CPVULCUY',
  name: 'Crow Gang',
  description: 'Crow Icon | Yellow Name | Be friendly | Do Clan League | Join Disc - AxChXNYqcm',
  type: 'inviteOnly',
  badgeId: 8000019,
  requiredTrophies: 15000,
  trophies: 707851,
  members: [
    {
      tag: '#8URP89R2C',
      name: 'fighter09',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 31427,
      icon: [Object]
    },
    {
      tag: '#2J2V9820G',
      name: 'XIN',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 31324,
      icon: [Object]
    },
    {
      tag: '#2CP2L9CY',
      name: 'CG | InterLC',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 31099,
      icon: [Object]
    },
    {
      tag: '#VJCRGR99',
      name: 'Roasted Rooster',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 30998,
      icon: [Object]
    },
    {
      tag: '#2V982LQYQ',
      name: 'Blossom🌸',
      nameColor: '0xfff9c908',
      role: 'president',
      trophies: 30084,
      icon: [Object]
    },
    {
      tag: '#P8YR0P2PR',
      name: 'yo kids, daddy',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 29245,
      icon: [Object]
    },
    {
      tag: '#PV2U0YRPV',
      name: 'CaramelPotato2',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 29187,
      icon: [Object]
    },
    {
      tag: '#PL8GY0G2L',
      name: '⛩|craittfa64🎋',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 28602,
      icon: [Object]
    },
    {
      tag: '#8YUV2CG29',
      name: 'Bubbles⚡️',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 28028,
      icon: [Object]
    },
    {
      tag: '#2LCP2PUCL',
      name: 'ΩΔSWDΩ',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 27012,
      icon: [Object]
    },
    {
      tag: '#UP008ULV',
      name: 'Manker',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 26615,
      icon: [Object]
    },
    {
      tag: '#8UYCYY8UC',
      name: 'KRAL',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 26560,
      icon: [Object]
    },
    {
      tag: '#PYLUYLJU',
      name: 'Buttercup✨',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 26449,
      icon: [Object]
    },
    {
      tag: '#ULY9CQUQ',
      name: 'bob_the_hob',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 25936,
      icon: [Object]
    },
    {
      tag: '#8QRVQ20V9',
      name: '❄ice|luk;)❄',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 25275,
      icon: [Object]
    },
    {
      tag: '#88U220CV2',
      name: 'VAÑSHIKA',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 24424,
      icon: [Object]
    },
    {
      tag: '#2R0LV90L8',
      name: 'ButterToast',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 23478,
      icon: [Object]
    },
    {
      tag: '#8QGUVG29',
      name: 'WesleyTheLagger',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 23014,
      icon: [Object]
    },
    {
      tag: '#200UCGLGG',
      name: 'Samurai_33',
      nameColor: '0xff1ba5f5',
      role: 'member',
      trophies: 22662,
      icon: [Object]
    },
    {
      tag: '#2LU22LJ88',
      name: 'Amart27Mac',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 22216,
      icon: [Object]
    },
    {
      tag: '#2990J0LJJ',
      name: '00',
      nameColor: '0xffff9727',
      role: 'member',
      trophies: 21525,
      icon: [Object]
    },
    {
      tag: '#808Y8VVV9',
      name: 'Zough',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 21509,
      icon: [Object]
    },
    {
      tag: '#2Q2L2JL9L',
      name: 'master ft',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 21501,
      icon: [Object]
    },
    {
      tag: '#9YGR9GQU',
      name: 'ANANASIKO',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 20869,
      icon: [Object]
    },
    {
      tag: '#8GV9R9C0Y',
      name: 'jack',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 20152,
      icon: [Object]
    },
    {
      tag: '#2CPLJCQQQ',
      name: '⚔️LORDツVULCAN⚔️',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 19548,
      icon: [Object]
    },
    {
      tag: '#8VG89UJY9',
      name: 'samurai',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 18961,
      icon: [Object]
    },
    {
      tag: '#PQYC88V80',
      name: 'Matty_YT',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 16865,
      icon: [Object]
    },
    {
      tag: '#P9GR9VQVJ',
      name: 'DeathBlade 2',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 3286,
      icon: [Object]
    }
  ]
};
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
  }else if(msg.content == '!updateClubTrophies'){
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
  }else if(msg.content == '!help'){
    msg.reply("!club-club trophies \n!updateClubTrophies-accurate club trophes that works once every like 5mins");
  }
}
