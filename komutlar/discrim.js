const Discord = require('discord.js');
exports.run = function(client, message, args) {

        const discrim = args[0] || message.author.discriminator;
        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.tag);
        
        if (users < 1) {
const embed2 = new Discord.RichEmbed()
.setColor(3447003)
.setDescription(`${discrim} bulunamadı!`)
            return message.channel.send({embed2});
        } else {
           message.channel.sendCode(`${users.join('\n')}`, { split: true })
        }


}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'discrim',
  description: 'Özel komut.',
  usage: 'discrim'
};