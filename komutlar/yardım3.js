const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Mag Eğlence Komutları**")
        .setDescription('')
        .setColor("0xe2ff00")
        .addField("**» Eğlence**", ' **€s-küfür** = Bot Kendi Yarttığı Küfürleri Yazar. ')
        .addField("**» Eğlence**", ' **€alkış** = Bot Alkışlar. ')
        .addField("**» Eğlence**", ' **€ascii** =  Mesajınızı Text Olarak Yazar. ')
        .addField("**» Eğlence**", ' **€atasözü** =  Rastgele Atasözü Atar. ')
        .addField("**» Eğlence**", ' **€bayrak** =  Dene Ve Gör. ')
        .addField("**» Eğlence**", ' **€dönenrenkler** =  Dönenrenkler Yollar. ')
        .addField("**» Eğlence**", ' **€ekip** =  Ekip Alım Şartlarını Gösterir.. ')
        .addField("**» Eğlence**", ' **€emoji** =  Mesajınızı Emoji Olarak Yazar. ')
        .addField("**» Eğlence**", ' **€gif** =  Arattığınız Konuda Gif Atar. ')
        .addField("**» Eğlence**", ' **€hava** =  Belirttiğiniz Bölgenin Hava Durumunu Gösterir. ')
        .addField("**» Eğlence**", ' **€hesapla** =  İstediğiniz İşlemi Hesaplar. ')
        .addField("**» Eğlence**", ' **€intihar** =  İntihar Edersiniz. ')
        .addField("**» Eğlence**", ' **€kafasınasık** =  Etiketlediğiniz Kişinin Kafasına Sıkar. ')
        .addField("**» Eğlence**", ' **€korkut** =  Etiketlediğiniz Kişiyi Korkutur. ')
        .addField("**» Eğlence**", ' **€mesajk** =  Mesajınızı Küçültür. ')
        .addField("**» Eğlence**", ' **€dcnitro** =  Profile Nitro Efekti Ekler. ')
        .addField("**» Eğlence**", ' **€oylama** =  Belirttiğiniz Konuda Oylama Yapar. ')
  
    
                 .setFooter("**» ⚡ Daha Fazla Eğlenmek İçin €eğlence2 **",)
    
    
    
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
    name: 'eğlence',
    description: 'Tüm komutları gösterir.',
    usage: 'eğlence [komut]'
};