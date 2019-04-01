const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(' ```Acaba Mermiyi Yicek Mi?``` ').then(message => {
      var espriler = ['**🔥 Tebrikler! Mermiyiyi Yemedin Sıradaki!🔥**','**🔫 Üzgünüm, Mermi Beynini Dağıttı.🔫**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rusruleti',
  description: 'Acaba Yaşabilicek Misin?',
  usage: 'rusruleti'
};