const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("657808162812067870")
setInterval(function() {
channel.send(`FackYou FackYou FackYou FackYou FackYou`);
}, 30)
})

client.login(process.env.BOT_TOKEN);