const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Alkış 👏👅\n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("0xe2ff00")
  .setImage("https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif")
  .setFooter("☢️ 2018 ☢️ Mag ☢️ BOT ☢️ 1.0.4 V ☢️", " ")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'alkış',
  description: 'Bot Alkışlar',
  usage: 'alkış'
};