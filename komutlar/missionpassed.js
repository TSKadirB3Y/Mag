const Discord = require('discord.js');
var Jimp = require('jimp');

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/444475700871823361/517271487263145994/mission_passed.png", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 5, 0).write(`./img/missionpassed/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/missionpassed/${bot.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'missionpassed',
  description: 'Mission passed efekti',
  usage: 'missionpassed'
};