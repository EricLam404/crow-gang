
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
var cron = require('node-cron');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login("OTE3NTUxMDMzOTczMDgwMTM0.Ya6V_Q.zPmFfMZDe4y5RPWiDbAe-vS6VDQ");

client.on('ready', readyDiscord);

function readyDiscord(){
  console.log("Online")
}

client.on('messageCreate', gotMessage);

cron.schedule('0 16 18 * * *', () => {
  console.log('S')
  var channel = client.channels.cache.get("913599272094666752")
  channel.send("TEST");
  console.log('SENT');
});
async function gotMessage(msg){
  if(msg.content === '!club'){
    let club = {
      tag: '#CPVULCUY',
      name: 'Crow Gang',
      description: 'Crow Icon | Yellow Name | Be friendly | Do Clan League | Join Disc - 953VZxx',
      type: 'inviteOnly',
      badgeId: 8000019,
      requiredTrophies: 15000,
      trophies: 775124,
      members: [
        {
          tag: '#8VG8VGG2G',
          name: 'POTATO',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 39292,
          icon: [Object]
        },
        {
          tag: '#2CP2L9CY',
          name: 'CG | InterLC',
          nameColor: '0xfff9c908',
          role: 'vicePresident',
          trophies: 32598,
          icon: [Object]
        },
        {
          tag: '#VJCRGR99',
          name: 'Roasted Rooster',
          nameColor: '0xfff9c908',
          role: 'senior',
          trophies: 30925,
          icon: [Object]
        },
        {
          tag: '#8URP89R2C',
          name: 'fighter09',
          nameColor: '0xfff9c908',
          role: 'vicePresident',
          trophies: 30799,
          icon: [Object]
        },
        {
          tag: '#PV2U0YRPV',
          name: 'CaramelPotato2',
          nameColor: '0xfff9c908',
          role: 'senior',
          trophies: 30286,
          icon: [Object]
        },
        {
          tag: '#R8V0G280',
          name: 'anas',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 29273,
          icon: [Object]
        },
        {
          tag: '#2V982LQYQ',
          name: 'Blossom🌸',
          nameColor: '0xfff9c908',
          role: 'president',
          trophies: 29141,
          icon: [Object]
        },
        {
          tag: '#2J2V9820G',
          name: 'XIN',
          nameColor: '0xfff9c908',
          role: 'vicePresident',
          trophies: 28975,
          icon: [Object]
        },
        {
          tag: '#P8YR0P2PR',
          name: 'yo kids, daddy',
          nameColor: '0xfff9c908',
          role: 'senior',
          trophies: 28654,
          icon: [Object]
        },
        {
          tag: '#8YUV2CG29',
          name: 'Bubbles⚡️',
          nameColor: '0xfff9c908',
          role: 'vicePresident',
          trophies: 28600,
          icon: [Object]
        },
        {
          tag: '#PL8GY0G2L',
          name: '⛩|craittfa64🎋',
          nameColor: '0xfff9c908',
          role: 'senior',
          trophies: 28100,
          icon: [Object]
        },
        {
          tag: '#2LCP2PUCL',
          name: 'ΩΔSWDΩ',
          nameColor: '0xfff9c908',
          role: 'senior',
          trophies: 27558,
          icon: [Object]
        },
        {
          tag: '#8UYCYY8UC',
          name: 'KRAL',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 26930,
          icon: [Object]
        },
        {
          tag: '#PYLUYLJU',
          name: 'Buttercup✨',
          nameColor: '0xfff9c908',
          role: 'vicePresident',
          trophies: 26928,
          icon: [Object]
        },
        {
          tag: '#ULY9CQUQ',
          name: 'bob_the_hob',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 26393,
          icon: [Object]
        },
        {
          tag: '#UP008ULV',
          name: 'Manker',
          nameColor: '0xfff9c908',
          role: 'senior',
          trophies: 25961,
          icon: [Object]
        },
        {
          tag: '#88U220CV2',
          name: 'VAÑSHIKA',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 25281,
          icon: [Object]
        },
        {
          tag: '#8QRVQ20V9',
          name: '❄ice|luk;)❄',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 24959,
          icon: [Object]
        },
        {
          tag: '#2GR29PQ0',
          name: 'oof',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 24690,
          icon: [Object]
        },
        {
          tag: '#2C22YRQY2',
          name: 'Messi 123',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 23468,
          icon: [Object]
        },
        {
          tag: '#2R0LV90L8',
          name: 'ButterToast',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 23305,
          icon: [Object]
        },
        {
          tag: '#200UCGLGG',
          name: 'Samurai_33',
          nameColor: '0xff1ba5f5',
          role: 'member',
          trophies: 22522,
          icon: [Object]
        },
        {
          tag: '#8QGUVG29',
          name: 'WesleyTheLagger',
          nameColor: '0xfff9c908',
          role: 'senior',
          trophies: 22457,
          icon: [Object]
        },
        {
          tag: '#8J29JCL09',
          name: 'Seth',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 22113,
          icon: [Object]
        },
        {
          tag: '#8GV9R9C0Y',
          name: 'jack',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 20981,
          icon: [Object]
        },
        {
          tag: '#GGVUCQC8',
          name: 'Omayou69™',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 20031,
          icon: [Object]
        },
        {
          tag: '#8C9V8C982',
          name: '⚔️HORRIDツHENRY⚔',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 20018,
          icon: [Object]
        },
        {
          tag: '#8VG89UJY9',
          name: 'samurai',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 19709,
          icon: [Object]
        },
        {
          tag: '#2J9P0URY8',
          name: 'Aleksa520',
          nameColor: '0xfff9c908',
          role: 'member',
          trophies: 19201,
          icon: [Object]
        },
        {
          tag: '#GV2QQUP2',
          name: 'Teko',
          nameColor: '0xffcb5aff',
          role: 'member',
          trophies: 15976,
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
