const Discord = require('discord.js');
const client = new Discord.Client();
const djsDataAPI = require('djs-data-api');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  global.api = new djsDataAPI("VERY VERY VERY SECRET TOKEN", client.user.id);
});

client.on('message', async msg => {
  if (msg.content.startsWith('bilgi')) {
    if (!msg.mentions.members.first()) return;
    const res = await api.getInfo(msg.mentions.members.first().id);

    msg.channel.send(res.text);
  }
});

client.login('token');
