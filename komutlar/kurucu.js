const Discord = require('discord.js');
const main = require('../ayarlar.json');

exports.run = (Octopus, message, params) => {

	if (!message.guild) {
    const Uyarı = new Discord.RichEmbed()
    .setColor("0xe2ff00")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucuBigisi` Adlı Komutu Özel Mesajlarda Kullanamazsın.')
    return message.author.sendEmbed(Uyarı); }
    if (message.channel.type !== 'dm') {
      const Sunucu = new Discord.RichEmbed()
    .setColor("0xe2ff00")
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Sahibi:', message.guild.owner)

    return message.channel.sendEmbed(Sunucu);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kurucu'
};