const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("428690920246870016");
let c = g.channels.get("519599123435880449");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't \"text\"");
}
});


client.login(process.env.MEERCY);
