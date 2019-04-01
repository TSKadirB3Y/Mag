const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Mag Yetkili Komutları**")
        .setDescription('')
        .setColor("0xe2ff00")
        .addField("**» Yetkili**", ' **€kategori** =  Kategori Oluşturur. ')
        .addField("**» Yetkili**", ' **€ses** =  Ses Kanalı Oluşturur. ')
        .addField("**» Yetkili**", ' **€metin** =  Metin Kanalı Oluşturur. ')
        .addField("**» Yetkili**", ' **€kick** =  Sunucudan Atar. ')
        .addField("**» Yetkili**", ' **€kilit** =  Kanalı Belirtilen Süre Kilitler. ')
        .addField("**» Yetkili**", ' **€mute** =  Mute Atar. ')
        .addField("**» Yetkili**", ' **€otorol** =  »BAKIMDA» ')
        .addField("**» Yetkili**", ' **€rtarama** =  Oynuyor Yerinde Reklam Yapanları Tespit Eder. ')
        .addField("**» Yetkili**", ' **€sayaç** =  »BAKIMDA» ')
        .addField("**» Yetkili**", ' **€slowmode** =  Sohbete yazma sınır (süre) ekler. ')
        .addField("**» Yetkili**", ' **€terfi** =  Terfi Atar. ')
        .addField("**» Yetkili**", ' **€unmute** =  Muteyi Kaldırır. ')
      
  
    
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
    name: 'yetkili',
    description: 'Tüm komutları gösterir.',
    usage: 'yetkili [komut]'
};