 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/1ykTy58QUmRBexNYT4/giphy.gif","https://media.giphy.com/media/tJ2dUFTngWvQDQZzL1/giphy.gif","https://media.giphy.com/media/4Z1Gn8dR94Y3cz7Ifq/giphy.gif","https://media.giphy.com/media/2fIaVPhlYjoCL0yOw8/giphy.gif","https://media.giphy.com/media/5tdma5fS6UgZHzBvFF/giphy.gif","https://media.giphy.com/media/cdXvauyP8wFTerXJPx/giphy.gif","https://media.giphy.com/media/4Q06dpu5hMWJZCQodq/giphy.gif","https://media.giphy.com/media/2zoIt4oB5XkLjLh3eI/giphy.gif","https://media.giphy.com/media/kDXt9MpVI67iEGJPsQ/giphy.gif","https://media.giphy.com/media/7YCAsgqX7wotHWICNY/giphy.gif","https://media.giphy.com/media/1yj6jIhGUvJWjOUecq/giphy.gif","https://media.giphy.com/media/fQiB0Obfxp0wnnCdHW/giphy.gif","https://media.giphy.com/media/7Jw6Y3xnPvNpWG2Rjc/giphy.gif","https://media.giphy.com/media/X8y8iY0VXmPyNgKoYf/giphy.gif","https://media.giphy.com/media/xFkgQAQqH7vC8Ae1hR/giphy.gif","https://media.giphy.com/media/29HRbyFIYEYi5ELawQ/giphy.gif","https://media.giphy.com/media/1yjpiwHHYbnfyKgMI/giphy.gif","https://media.giphy.com/media/cQ7e5AvSR6o5Q1dGXF/giphy.gif","https://media.giphy.com/media/88jhewHzug6uT4VNfd/giphy.gif","https://media.giphy.com/media/1n5Edu2UNN9xSe3ia1/giphy.gif","https://media.giphy.com/media/2zekJPoyHChTBFt3UR/giphy.gif"];
  
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("0xe2ff00")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hentaigif','hentai','hgif'],
  permLevel: 0
};

exports.help = {
  name: 'Hentai Gösterir!',
  description: 'h-gif.',
  usage: 'h-gif'
}; 