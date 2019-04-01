const Discord = require('discord.js');
const weather = require("weather-js");
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':no_entry: UYARI :no_entry:', '`havadurumu` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply(':no_entry: Bir şehir adı girmelisin.');
  weather.find({search: mesaj, degreeType: 'C'}, function(err, result) { 
    if (err) message.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFFF + 1)),
description: (`Hata Oluştu: ${err}`)

}}); 
    if (!result) {
      message.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFFF + 1)),
description: (`Hata: Belirli bir şehir giriniz.`)

}}) 
        return; 
    }
    var current = result[0].current; 
    if (!current) {
        message.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFFF + 1)),
description: (`:no_entry: Belirli bir şehir giriniz.`)

}}) 
        return; 
    }
    let blockedChars = args.join('').toLowerCase().
  replace(/Rain Shower/g, 'Sağanak Yağmur');
  
    var location = result[0].location;   
    const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`) 
        .setFooter(`${mesaj} isimli şehirin hava durumları`)
        .setTimestamp()
        .setAuthor(`${current.observationpoint} İçin Hava Durumu`)
        .setThumbnail(current.imageUrl)
        .setColor("RANDOM") 
        .addField('Sıcaklık',`${current.temperature} Derece`, true)
        .addField('Hissedilen Sıcaklık',`${current.feelslike} Derece`, true)
        .addField('Rüzgar',current.winddisplay, true)
        .addField('Rüzgar Hızı',current.windspeed, true)
        .addField('Nem', `${current.humidity}%`, true)
        message.channel.send({embed});
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'havadu',
  description: 'Adını girdiğiniz şehirin havadurumu bilgilerini gösterir.',
  usage: 'hava şehir adı'
};
