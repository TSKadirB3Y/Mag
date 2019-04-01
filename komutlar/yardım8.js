const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Mag Effect Komutları**")
        .setDescription('')
        .setColor("0xe2ff00")
        .addField("**» Effect**", ' **€dcnitro** =  Profile DcNitro Efekti. ')
        .addField("**» Effect**", ' **€bravery** =  Profile Bravery Efekti. ')
        .addField("**» Effect**", ' **€balance** =  Profile Balance Efekti. ')
        .addField("**» Effect**", ' **€brilliance** =  Profile Brilliance Efekti.) ')
        .addField("**» Effect**", ' **€benisev** =  Profile I♥You Efekti. ')      
      
  
    
                 .setFooter("**» ⚡ Botu Sunucunuza Davet Etmek İçin €davet **",)
    
    
    
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp', 'help', 'y'],
    permLevel: 0
};

exports.help = {
    name: 'effect',
    description: 'Tüm komutları gösterir.',
    usage: 'effect [komut]'
};