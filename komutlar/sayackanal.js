const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("././jsonlar/sayackanal.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setTitle(`» Yanlış Kullanım!`)
          .addField(`Doğru Kullanım`, `${ayarlar.prefix}sayaç-kanal-ayarla <#kanal>`)
        message.channel.send({embed})
        return
    }

    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/sayackanal.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  
    const embed = new Discord.RichEmbed()
    .setDescription(`» Sayaç kanalı başarıyla ${channel} olarak ayarlandı!`)
    .setColor("RANDOM")
    message.channel.send({embed})
  

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayaç-kanal-ayarla'],
    permLevel: `Yönetici izni gerekiyor.`
}

exports.help = {
    name: 'sayaç-kanal-ayarla',
    category: 'ayarlar',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'r?giriş-çıkış-ayarla <#kanal>'
}