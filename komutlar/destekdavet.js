exports.help = {
    name: 'davet',
    description: 'Botun davet linkini gönderir.',
    usage: 'davet'
};
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
        .setTitle("Tam Buraya Tıklayıp Davet Edebilirsin | Press Invite")
        .setAuthor("MagTV", "https://images-ext-1.discordapp.net/external/h3kyyeG4Wzrzb-3FpxUumpbxUcHKOC5PcNgYR2eggLw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/498455301431754752/bd6326d931a107d9937483349024d327.png?width=566&height=566")
        .setColor("0xe2ff00")
        .setDescription("Mag sunucunuza ekleyip sunucunuzda arkadaşlarınızla eğlenebilirsiniz.")
        .setFooter('Mag', client.user.PoweradeURL)
        .setFooter('Mag', client.user.PoweradeURL)
        .setTimestamp()
        .setURL('https://discordapp.com/oauth2/authorize?client_id=509462204337225735&scope=bot&permissions=2146958847')

    message.channel.send({
        embed
    });
};
exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
        .setTitle("Eğlence Sunucusu")
        .setColor("0xe2ff00")
        .setDescription("MagTV Eğlenceli Vakit Geçirebilirsiniz!.")
        .setFooter('Mag', client.user.PoweradeURL)
        .setFooter('Mag', client.user.PoweradeURL)
        .setTimestamp()
        .setURL('https://discord.gg/dgACuZy')

    message.channel.send({
        embed
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
    permLevel: 0
};

exports.help = {
    name: 'd-davet',
    description: 'Bot ile ilgili bilgi verir.',
    usage: 'd-davet'
};