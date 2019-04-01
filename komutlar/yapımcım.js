const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()
        .setDescription('')
        .setColor("0xe2ff00")
        .addField("**》 > Yapımcım >《**", `!✯ђ§✯Łøяð#0001`)
        .addField("**》 > Sponsor/Destek >《**", `!✯ђ§✯Łøяð#0001`)
        .addField("**》 > Sponsor/Destek >《**", `!✯ђ§✯Łøяð#0001`)
        .setURL('https://www.instagram.com/akadircanekinci')
        .setTitle("İnstagram Ulaşmak İçin!")


    return message.channel.sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yapımcı'],
    permLevel: 0
};

exports.help = {
    name: 'yapımcım',
    description: 'Botun Yapımcısını Gösterir',
    usage: 'yapımcı'
};