const Discord = require('discord.js');
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let küfür = await db.fetch(`kufur_${message.guild.id}`)
  let reklam = await db.fetch(`reklam_${message.guild.id}`)
  let sayaç = await db.fetch(`sayacKanal_${message.guild.id}`).then(i => {
  const acik  = client.emojis.find(emoji => emoji.name === "Ack");
  const kapali = client.emojis.find(emoji => emoji.name === "kapal");
  var küfürs = (küfür === 'Açık' ? (`**${acik} Aktif**`) : 'Kapalı' ? (`**${kapali} Aktif edilmedi!**`) : ("Bilinmiyor/Bulunamadı"))
  var reklams = (reklam === 'Açık' ? (`**${acik} Aktif**`) : 'Kapalı' ? (`**${kapali} Aktif edilmedi!**`) : ("Bilinmiyor/Bulunamadı"))
  const s = {
    'undefined' : "#<Belirlenmemiş>"  
  }
  const panelembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Küfür Engelleyici', küfürs)
  .addField('Reklam Engelleyici', reklams)  
  message.channel.sendEmbed(panelembed)
  
});
  };
                                                                          
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['panel'],
  permLevel: 0
};

exports.help = {
  name: 'panel',
  description: 'Sunucunuzdaki ayarları gösterir..',
  usage: 'panel'
};