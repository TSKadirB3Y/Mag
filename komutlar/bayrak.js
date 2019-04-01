const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Türkiyeeee <3 !!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/497841988977295371/509738828806881290/tumblr_oe0bm7NiZ11s22rc8o1_r1_500.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bayrak',
  description: 'Dene ve Gör :D',
  usage: 'bayrak'
};