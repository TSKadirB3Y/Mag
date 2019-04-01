const Discord = require('discord.js');
exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setTitle("Mag ! \n")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor("0xe2ff00")
        .addField('**1.** Saygılı Efendi Olunacak 1')
        .addField('**2.** Discord,Twitch Anlaması Gerek 2')
        .addField('**3.** Yaş Ortalaması +15! 3')
        .addField('**Yukarıda Kurallara Uyulmadığı Taktirde Ekip Alım Yok!!!!**')
        .setFooter("☢️ 2018 ♥ Mag BOT ☢️")
        /*
         * Takes a Date object, defaults to current date.
         */

    message.channel.send({
        embed
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ekip',
    description: 'Ekip Alım Şartlarını Gösterir.',
    usage: 'ekip'
};