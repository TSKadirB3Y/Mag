const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Mag Ana Komutları**")
        .setDescription('')
        .setColor("0xe2ff00")
        .addField("**» Ana Komutlar**", ' **€istatistik** = Botun istatistiğini gösterir. ')
        .addField("**» Ana Komutlar**", ' **€ping** =  Botun pingini ölçer. ')
        .addField("**» Ana Komutlar**", ' **€sunucubilgi** =  Moderasyon Komutları ! ')
        .addField("**» Ana Komutlar**", ' **€yardım** =  Botun bütün komutlarını size gösterir. ')
        .addField("**» Ana Komutlar**", ' **€bilgi** =  Bot hakkında bilgi verir. ')
        .addField("**» Ana Komutlar**", ' **€davet** =  Botun davet linkini atar. ')
        .addField("**» Ana Komutlar**", ' **€canlıdestek** =  Canlı Destek Tablebi Oluşturur. ')
        .addField("**» Ana Komutlar**", ' **€anket** =  Anket. ')
        .addField("**» Ana Komutlar**", ' **€ekip** =  Ekip Alım Şartlarını Gösterir. ')
        .addField("**» Ana Komutlar**", ' **€g-arama** =  İstediğiniz Kelimeyi Googlede Arar. ')      
        .addField("**» Ana Komutlar**", ' **€g-çeviri** =  İstediğiniz Kelimeyi Çevirir. ')  
        .addField("**» Ana Komutlar**", ' **€s-arama** =  İstediğiniz Müziği Spotifyde Arar. ')
    
    
    
                 .setFooter("**» ⚡ Botu Sunucunuza Davet Etmek İçin €davet**",)
    
    
    
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
    name: 'anakomutlar',
    description: 'Tüm komutları gösterir.',
    usage: 'anakomutlar [komut]'
};