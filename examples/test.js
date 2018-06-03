const Discord = require('discord.js');
const client = new Discord.Client();
const djsDataAPI = require('djs-data-api');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const api = new djsDataAPI("VERY VERY VERY SECRET TOKEN", client.user.id);
});

client.on('message', msg => {
  if (msg.content === 'bilgi') {
    api.getInfo("326474599405584385").then(res => msg.channel.send(res.body || res.text));
  }
});

client.login('token');
