const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("././jsonlar3/hgm.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let channel = message.mentions.channels.first()
      const secenekler = args.slice(1).join(' ');
    if (!channel) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setTitle(`» Yanlış Kullanım!`)
          .addField(`Doğru Kullanım`, "!hoş-geldin-ayarla <#kanal>  ve <hoş geldin mesajı>  Not: ${kullanici} Sunucuya Yeni Katılan Kullanıcı Olur ${sunucu} ise sunucunuzun adı olur")
        message.channel.send({embed})
        return
    }

    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id,
          mesaj: secenekler
        };
    }
  
    fs.writeFile("././jsonlar3/hgm.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  
    const embed = new Discord.RichEmbed()
    .setDescription(`» Hoş Geldin mesajı başarıyla "${secenekler}" olarak ayarlandı!`)
    .setColor("RANDOM")
    message.channel.send({embed})
  

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'hoşgeldinmesaj'],
    permLevel: `Yönetici izni gerekiyor.`
}

exports.help = {
    name: 'hoş-geldin-ayarla',
    category: 'ayarlar',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'r?giriş-çıkış-ayarla <#kanal>'
}