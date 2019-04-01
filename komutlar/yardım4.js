const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Mag Eğlence Komutları**")
        .setDescription('')
        .setColor("0xe2ff00")
        .addField("**» Eğlence**", ' **€piyango** =  O Talihli Kişi Sizmisiniz? ')
        .addField("**» Eğlence**", ' **€rusruleti** =  Acaba Yaşayabilicekmisin. ')
        .addField("**» Eğlence**", ' **€sigara** =  Bot Sigara İçer. ')
        .addField("**» Eğlence**", ' **€kaçcm** =  Öhm .) ')
        .addField("**» Eğlence**", ' **€simit** =  Simit Yersiniz. ')
        .addField("**» Eğlence**", ' **€sor** =  Sihirli 8ball Sorularınızı Cevaplar. ')
        .addField("**» Eğlence**", ' **€stresçarkı** =  Stres Çarkı Çevirirsiniz. ')
        .addField("**» Eğlence**", ' **€tarih** =  Bugünün Tarihini Gösterir. ')
        .addField("**» Eğlence**", ' **€tersrenk** =  Profildeki Renkleri Tersine Çevirir. ')
        .addField("**» Eğlence**", ' **€trampet** =  Çal Hele Dinleyah. ')
        .addField("**» Eğlence**", ' **€woodie** =  Oduncu Hakkında Bilgi Verir. ')
        .addField("**» Eğlence**", ' **€wwegif** =  Smackdown Gif Atar. ')
        .addField("**» Eğlence**", ' **€yapımcım** =  Botun Yapımcısını Gösterir. ')
        .addField("**» Eğlence**", ' **€çekiç** =  Etiketlediğiniz Kişiye Çekiç Atar. ')
        .addField("**» Eğlence**", ' **€öl** =  Ölürsün. ')
        .addField("**» Eğlence**", ' **€şifre** =  Belirttiğiniz Sayı Uzunluğunda Şifre Atar. ')
      
  
    
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
    name: 'eğlence2',
    description: 'Tüm komutları gösterir.',
    usage: 'eğlence2 [komut]'
};