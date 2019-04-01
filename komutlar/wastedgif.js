 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/BdrpgYHvghIkw/giphy.gif","https://media.giphy.com/media/Dd5VmOn1O5vgc/giphy.gif","https://media.giphy.com/media/lf2csamNLtVQs/giphy.gif","https://media.giphy.com/media/ouFC8iT3bIRPy/giphy.gif","https://media.giphy.com/media/Qi2pBNdPf76QU/giphy.gif","https://media.giphy.com/media/RLi2oeVZiVkE8/giphy.gif","https://media.giphy.com/media/2zMdPmftjc5oI/giphy.gif","https://media.giphy.com/media/WO59ifleCIVNpnWVQ8/giphy.gif","https://media.giphy.com/media/KZTItwsvGxH6E/giphy.gif","https://media.giphy.com/media/1YLCRJrUYU2nC/giphy.gif","https://media.giphy.com/media/LcC5L8LQIZL0I/giphy.gif","https://media.giphy.com/media/uMWIZ4uioxFja/giphy.gif","https://media.giphy.com/media/12yRdKiC8NfNle/giphy.gif","https://media.giphy.com/media/4l5McqvSUSvYI/giphy.gif","https://media.giphy.com/media/zwWronSERV55K/giphy.gif","https://media.giphy.com/media/uAH7abSiUAlPO/giphy.gif","https://media.giphy.com/media/1WmK5dM0R2ZOM/giphy.gif","https://media.giphy.com/media/jVSb0TFKE7ni0/giphy.gif"];
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
  aliases: ['wastedd','wasted','w-gif'],
  permLevel: 0
};

exports.help = {
  name: 'Wasted Gif Gösterir!',
  description: 'wgif.',
  usage: 'wgif'
}; 