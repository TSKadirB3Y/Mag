//!✯ђ§✯
const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 2) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription(message.author.tag + ', kullanım: /1vs1 <@kullanıcı> <@kullanıcı> .').setFooter('', client.user.avatarURL).setTimestamp());
    var sans = ["10'a","1'e","20'ye","30'a","2 ye"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaş başladı!').setFooter('Mag 1vs1', client.user.avatarURL).setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaşılıyor... Raund 1').setFooter('Mag 1vs1', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaşılıyor... Raund 2').setFooter('Mag 1vs1', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaşılıyor... Raund 3').setFooter('Mag 1vs1', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaşın kazananı belirleniyor.').setFooter('Mag 1vs1', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaş bitti!').setFooter('Mag 1vs1', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Adamın canı 100den **'+ sonuc +'** kadar düştü ve rakibin pes etti.').setImage("https://media.giphy.com/media/3oEhmVCSmpW56nR6rm/giphy.gif").setFooter('1vs1 bitti. | Kazanan ' + user.tag + '', client.user.avatarURL).setTimestamp()))
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '1vs1',
  description: 'Seçtiğiniz 2 kişiyi savaştırırsınız.',
  usage: '1vs1 <@kullanıcı> <@kullanıcı>'
};