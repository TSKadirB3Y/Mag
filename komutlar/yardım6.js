const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Mag Müzik Komutları**")
        .setDescription('')
        .setColor("0xe2ff00")
        .addField("**» Müzik**", ' **€çal** = Müzik Arar Ve Listesini Atar. ')
        .addField("**» Müzik**", ' **€durdur** =  Çalan Şarkıyı Durdurur. ')
        .addField("**» Müzik**", ' **€geç** =  Çalan Şarkıyı Geçer. ')
        .addField("**» Müzik**", ' **€ses** =  Ses Seviyesini Ayarlar. ')
  
    
                 .setFooter("**» ⚡ 10 Saniye İçinde Seçiminizi Belirtmelisiniz.Seçim Belirtilirken Prefix Kullanılmaz !**",)
    
    
    
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
    name: 'müzik',
    description: 'Tüm komutları gösterir.',
    usage: 'müzik [komut]'
};