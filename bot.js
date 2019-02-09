//////////////////////////////////////////////////////////////////////////////////////////////////
const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');
const D6 = require('discord.js');
const D7 = require('discord.js');
const D8 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();
const p6 = new D6.Client();
const p7 = new D7.Client();
const p8 = new D8.Client();
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "520296992161792000"; 
var ChannelID = "541600667446411265";
var prefix = "H";
console.log('MeeRcY , Code.');
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('ready', () => {  
    function timerFunc() {
        p1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p2.on('ready', () => {
    function timerFunc() {
        p2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p3.on('ready', () => {
    function timerFunc() {
        p3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p4.on('ready', () => {
    function timerFunc() {
        p4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p5.on('ready', () => {
    function timerFunc() {
        p5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p6.on('ready', () => {
    function timerFunc() {
        p6.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p7.on('ready', () => {
    function timerFunc() {
        p7.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p8.on('ready', () => {
    function timerFunc() {
        p8.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '1') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p2.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '2') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p3.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '3') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p4.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '4') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p5.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '5') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p6.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '6') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p7.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '7') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p8.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '8') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('ready', () => {
p1.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p2.on('ready', () => {
p2.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p3.on('ready', () => {
p3.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p4.on('ready', () => {
p4.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p5.on('ready', () => {
p5.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p6.on('ready', () => {
p6.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p7.on('ready', () => {
p7.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p8.on('ready', () => {
p8.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
////////////////////////////////////////////////////////////////////////////////////////////////// meercy
p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
p4.login(process.env.B4);
p5.login(process.env.B5);
p6.login(process.env.B6);
p7.login(process.env.B7);
p8.login(process.env.B8);
//////////////////////////////////////////////////////////////////////////////////////////////////
const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');
const D6 = require('discord.js');
const D7 = require('discord.js');
const D8 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();
const p6 = new D6.Client();
const p7 = new D7.Client();
const p8 = new D8.Client();
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "520296992161792000"; 
var ChannelID = "541600667446411265";
var prefix = "H";
console.log('MeeRcY , Code.');
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('ready', () => {  
    function timerFunc() {
        p1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p2.on('ready', () => {
    function timerFunc() {
        p2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p3.on('ready', () => {
    function timerFunc() {
        p3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p4.on('ready', () => {
    function timerFunc() {
        p4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p5.on('ready', () => {
    function timerFunc() {
        p5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p6.on('ready', () => {
    function timerFunc() {
        p6.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p7.on('ready', () => {
    function timerFunc() {
        p7.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p8.on('ready', () => {
    function timerFunc() {
        p8.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '1') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p2.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '2') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p3.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '3') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p4.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '4') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p5.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '5') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p6.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '6') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p7.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '7') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p8.on('message', message => {
    if(message.author.id !== '540621956442226688') return;
    if(message.content.toLowerCase().split(' ')[0] == '8') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "540621956442226688") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('ready', () => {
p1.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p2.on('ready', () => {
p2.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p3.on('ready', () => {
p3.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p4.on('ready', () => {
p4.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p5.on('ready', () => {
p5.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p6.on('ready', () => {
p6.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p7.on('ready', () => {
p7.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
p8.on('ready', () => {
p8.user.setActivity("iiHouuuuSSaM.",{type: 'LISTENING'})
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!540621956442226688>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "540621956442226688") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
////////////////////////////////////////////////////////////////////////////////////////////////// meercy
p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
p4.login(process.env.B4);
p5.login(process.env.B5);
p6.login(process.env.B6);
p7.login(process.env.B7);
p8.login(process.env.B8);
