iiHouSSaM.on('message', message => {//iiHouSSaM#9494
        if (!iiHouSSaM.includes(message.author.id)) return;//iiHouSSaM#9494
  if (message.content === 'plsafk') {//iiHouSSaM#9494
   // let channel = guild.channels.find('name', '➥ Admin Voice');//iiHouSSaM#9494
message.delete()
  let channel = iiHouSSaM.channels.get('480651296509132810');//iiHouSSaM#9494
        let generale = iiHouSSaM.channels.get('523764079198732300');//iiHouSSaM#9494
      
          //if (!channel) return generale.join() .then(connection => message.channel.send(`** Done. :white_check_mark: ** `));
      
  channel.join()//iiHouSSaM#9494
  .then(connection => message.channel.send(` \` Im In \` ${channel}\`  \` `))//iiHouSSaM#9494
  .catch(console.error);//iiHouSSaM#9494
    }
});
